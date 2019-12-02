"use strict";

import cesium from "cesium";
import { module } from "angular";

import "./cesiumCompass.styl";
import template from "./cesiumCompass.pug";
import CesiumCompassSvg from "./CesiumCompassSvg";

type ListenerType = (event: MouseEvent) => void;
declare global {
    interface Window {
        Cesium: any;
    }
}


export default class CesiumCompass {
    private readonly $element: JQuery;
    private readonly $rootScope: angular.IRootScopeService;

    private readonly cesiumLazyLoadListenerEvent?: string;
    private readonly flyHomeCallback: () => void;
    private readonly scene: cesium.Scene;
    public readonly isActive: boolean;

    private orbitCursorAngle: number = 0;
    private orbitCursorOpacity: number = 0.0;
    private rotateMouseUpCallback?: ListenerType;
    private rotateMouseMoveCallback?: ListenerType;
    private orbitMouseUpCallback?: ListenerType;
    private orbitMouseMoveCallback?: ListenerType;

    private vectorScratch: cesium.Cartesian2 = {} as cesium.Cartesian2;
    private oldTransformScratch: cesium.Matrix4;
    private newTransformScratch: cesium.Matrix4;
    private cameraFocus: cesium.Cartesian3;
    private orbitFrame: cesium.Matrix4;
    private orbitIsLook: boolean = false;
    private orbitLastTimestamp: number = 0;
    private rotateFrame: cesium.Matrix4;
    private rotateInitialCameraAngle: number = 0;
    private rotateInitialCursorAngle: number = 0;

    public isRotating: boolean = false;
    public isOrbiting: boolean = false;

    // @ngInject
    constructor($element: JQuery, $rootScope: angular.IRootScopeService) {
        this.$element = $element;
        this.$rootScope = $rootScope;
    }

    $onInit() {
        if (this.cesiumLazyLoadListenerEvent) {
            this.$rootScope.$on(this.cesiumLazyLoadListenerEvent, this.init.bind(this));
        } else {
            this.init();
        }
    }

    private init(): void {
        this.oldTransformScratch = new window.Cesium.Matrix4();
        this.newTransformScratch = new window.Cesium.Matrix4();
        this.vectorScratch = new window.Cesium.Cartesian2();
        this.cameraFocus = new window.Cesium.Cartesian3();
        this.rotateFrame = new window.Cesium.Cartesian3();
        this.orbitFrame = new window.Cesium.Cartesian3();
    }

    public get svgCompassOuterRing(): string {
        return CesiumCompassSvg.SVG_COMPASS_OUTER_RING;
    }

    public get svgCompassGyro(): string {
        return CesiumCompassSvg.SVG_COMPASS_GYRO;
    }

    public get svgCompassRotationMarker(): string {
        return CesiumCompassSvg.SVG_COMPASS_ROTATION_MARKER;
    }

    public handleDoubleClick(): void {
        this.flyHomeCallback();
    }

    public handleMouseDown(event: MouseEvent): void {
        const maxDistance = this.compassRectangle.width / 2.0;
        const vector = this.getVector(event);
        const distanceFromCenter = window.Cesium.Cartesian2.magnitude(vector);

        const distanceFraction = distanceFromCenter / maxDistance;

        const nominalTotalRadius = 145;
        const nominalGyroRadius = 50;

        if (distanceFraction < nominalGyroRadius / nominalTotalRadius) {
            return this.orbit(event);
        }

        if (distanceFraction < 1.0) {
            return this.rotate(vector);
        }
    }

    private orbit(event: MouseEvent): void {
        this.removeOrbitEventListener();
        this.removeOrbitMouseCallbacks();
        this.isOrbiting = true;
        this.setOrbitFrame();
        this.setOrbitMouseCallbacks();
        this.addOrbitEventListener();
        this.updateAngleAndOpacity(event);
    }

    private updateAngleAndOpacity(event: MouseEvent) {
        const vector = this.getVector(event);
        const angle = Math.atan2(-vector.y, vector.x);
        this.orbitCursorAngle = window.Cesium.Math.zeroToTwoPi(angle - window.Cesium.Math.PI_OVER_TWO);

        const distance = window.Cesium.Cartesian2.magnitude(vector);
        const maxDistance = this.compassRectangle.width / 2.0;
        const distanceFraction = Math.min(distance / maxDistance, 1.0);
        this.orbitCursorOpacity = 0.5 * distanceFraction * distanceFraction + 0.5;
    }

    private removeOrbitEventListener(): void {
        this.removeListeners(this.orbitMouseMoveCallback as ListenerType, this.orbitMouseUpCallback as ListenerType);
    }

    private setOrbitMouseCallbacks(): void {
        this.orbitMouseMoveCallback = this.orbitMouseMove.bind(this);
        this.orbitMouseUpCallback = this.orbitMouseUp.bind(this);
    }

    private addOrbitEventListener(): void {
        this.addListeners(this.orbitMouseMoveCallback as ListenerType, this.orbitMouseUpCallback as ListenerType);
    }

    private orbitMouseMove(event: MouseEvent): void {
        this.updateAngleAndOpacity(event);

        const timestamp = window.Cesium.getTimestamp();
        const deltaT = timestamp - this.orbitLastTimestamp;
        const rate = (this.orbitCursorOpacity - 0.5) * 2.5 / 1000;
        const distance = deltaT * rate;

        const angle = this.orbitCursorAngle + window.Cesium.Math.PI_OVER_TWO;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        const oldTransform = this.lookAtFrame(this.orbitFrame);
        this.lookOrRotate(x, y);

        if (this.orbitFrame) {
            this.camera.lookAtTransform(oldTransform as cesium.Matrix4, undefined);
        }

        this.orbitLastTimestamp = timestamp;

        this.updateUi();
    }

    private orbitMouseUp(): void {
        this.updateUi();
        this.isOrbiting = false;
        this.removeOrbitEventListener();
        this.removeOrbitMouseCallbacks();
    }

    private removeOrbitMouseCallbacks(): void {
        this.orbitMouseMoveCallback = undefined;
        this.orbitMouseUpCallback = undefined;
    }

    private rotate(vector: cesium.Cartesian2): void {
        this.removeRotateEventListener();
        this.removeRotateMouseCallbacks();
        this.isRotating = true;
        this.initialRotation(vector);
        this.setRotateMouseCallbacks();
        this.addRotateEventListener();
    }

    private removeRotateEventListener(): void {
        this.removeListeners(this.rotateMouseMoveCallback as ListenerType, this.rotateMouseUpCallback as ListenerType);
    }

    private setRotateMouseCallbacks(): void {
        this.rotateMouseMoveCallback = this.rotateMouseMove.bind(this);
        this.rotateMouseUpCallback = this.rotateMouseUp.bind(this);
    }

    private addRotateEventListener(): void {
        this.addListeners(this.rotateMouseMoveCallback as ListenerType, this.rotateMouseUpCallback as ListenerType);
    }

    private removeRotateMouseCallbacks(): void {
        this.rotateMouseMoveCallback = undefined;
        this.rotateMouseUpCallback = undefined;
    }

    private rotateMouseUp(): void {
        this.updateUi();
        this.isRotating = false;
        this.removeRotateEventListener();
        this.removeRotateMouseCallbacks();
    }

    private rotateMouseMove(event: MouseEvent): void {
        const angleDifference = this.getAngle(event) - this.rotateInitialCursorAngle;
        const newCameraAngle = window.Cesium.Math.zeroToTwoPi(this.rotateInitialCameraAngle - angleDifference);

        const oldTransform = this.lookAtFrame(this.rotateFrame);
        const currentCameraAngle = -this.camera.heading;
        this.camera.rotateRight(newCameraAngle - currentCameraAngle);

        if (this.rotateFrame) {
            this.camera.lookAtTransform(oldTransform as cesium.Matrix4, undefined);
        }

        this.updateUi();
    }

    private get compassRectangle(): ClientRect {
        // @ts-ignore
        const [target] = this.$element.find(".compass");
        return target.getBoundingClientRect();
    }

    private updateUi(): void {
        this.setCss(".compass-orbit-marker", this.rotationMarkerRotation, this.orbitCursorOpacity);
        this.setCss(".compass-outer-ring", this.outerRingRotation);
    }

    private setCss(className: string, rotation: string, opacity: number = 1): void {
        this.$element.find(className)
            .css("transform", rotation)
            .css("-webkit-transform", rotation)
            .css("opacity", opacity);
    }

    private get rotationMarkerRotation(): string {
        return `rotate(-${this.orbitCursorAngle}rad)`;
    }

    private get outerRingRotation(): string {
        return `rotate(-${this.heading}rad)`;
    }

    private addListeners(mouseMoveFunction: ListenerType, mouseUpFunction: ListenerType): void {
        document.addEventListener("mousemove", mouseMoveFunction, false);
        window.addEventListener("mouseup", mouseUpFunction, false);
    }

    private removeListeners(mouseMoveFunction: ListenerType, mouseUpFunction: ListenerType): void {
        document.removeEventListener("mousemove", mouseMoveFunction, false);
        window.removeEventListener("mouseup", mouseUpFunction, false);
    }

    private get globe(): cesium.Globe {
        return this.scene.globe;
    }

    private get camera(): cesium.Camera {
        return this.scene.camera;
    }

    public get heading(): number {
        return this.camera.heading;
    }

    public setOrbitFrame(): void {
        const { frame, isLook } = this.getFrame();

        this.orbitFrame = frame;
        this.orbitIsLook = isLook;
    }

    private lookOrRotate(x: number, y: number): void {
        if (this.orbitIsLook) {
            this.camera.look(window.Cesium.Cartesian3.UNIT_Z, -x);
            this.camera.look(this.camera.right, -y);
        } else {
            this.camera.rotateLeft(x);
            this.camera.rotateUp(y);
        }
    }

    public initialRotation({ x, y }: cesium.Cartesian2): void {
        this.rotateInitialCursorAngle = Math.atan2(-y, x);
        this.setRotateFrame();

        if (this.rotateFrame) {
            const oldTransform = this.transform;
            this.camera.lookAtTransform(this.rotateFrame, undefined);
            this.rotateInitialCameraAngle = -this.camera.heading;
            this.camera.lookAtTransform(oldTransform, undefined);
        }
    }

    private setRotateFrame() {
        this.rotateFrame = this.getFrame().frame;
    }

    private getFrame(): { frame: cesium.Matrix4, isLook: boolean } {
        const { positionWC, directionWC } = this.camera;
        const rayScratch = new window.Cesium.Ray(positionWC, directionWC);

        this.cameraFocus = this.cameraFocus || new window.Cesium.Cartesian3();
        const cameraFocus = this.globe.pick(rayScratch, this.scene, this.cameraFocus);
        this.cameraFocus = cameraFocus || this.camera.position;

        return {
            frame: window.Cesium.Transforms.eastNorthUpToFixedFrame(this.cameraFocus, this.globe.ellipsoid, this.newTransformScratch),
            isLook: !cameraFocus
        };
    }

    private lookAtFrame(frame: cesium.Matrix4): cesium.Matrix4 | undefined {
        if (frame) {
            const transform = this.transform;
            this.camera.lookAtTransform(frame, undefined);
            return transform;
        }
    }

    private get transform(): cesium.Matrix4 {
        return window.Cesium.Matrix4.clone(this.camera.transform, this.oldTransformScratch);
    }

    private getCenter(): cesium.Cartesian2 {
        const { right, left, bottom, top } = this.compassRectangle;
        return new window.Cesium.Cartesian2((right - left) / 2.0, (bottom - top) / 2.0);
    }

    private getClickLocation({ clientX, clientY }: MouseEvent): cesium.Cartesian2 {
        const { left, top } = this.compassRectangle;
        return new window.Cesium.Cartesian2(clientX - left, clientY - top);
    }

    public getVector(event: MouseEvent): cesium.Cartesian2 {
        return window.Cesium.Cartesian2.subtract(this.getClickLocation(event), this.getCenter(), this.vectorScratch);
    }

    private getAngle(event: MouseEvent): number {
        const vector = this.getVector(event);
        return Math.atan2(-vector.y, vector.x);
    }

}

module("cesium-navigation").component("cesiumCompass", {
    template: template(),
    controller: CesiumCompass,
    bindings: {
        scene: "<",
        isActive: "<",
        flyHomeCallback: "<",
        cesiumLazyLoadListenerEvent: "<?"
    }
});
