## cesium-navigation
This is an AngularJS, standalone version of [Alberto's cesium-navigation](https://github.com/alberto-acevedo/cesium-navigation)
that adds a user friendly compass to your Cesium app without the use of Viewer
(e.g. when you're using [ol-cesium](https://github.com/openlayers/ol-cesium)).

## Getting Started

**Install @geoinfo/cesium-navigation**
```
$ npm i --save @geoinfo/cesium-navigation
```


**Import Module**
```
import "@geoinfo/cesium-navigtation"

angular.module("myModule", ["cesium-navigation"]);
```

**Add cesium-compass in your HTML**
```
<cesium-compass 
    scene="$ctrl.cesiumScene"
    is-active="$ctrl.isActive"
    fly-home-callback="$ctrl.flyHome"
    cesium-lazy-load-listener-event="'cesiumLoaded'"
></cesium-compass>
```
**Bindings**  

| Name                             | Type         | Description                                                                                                 |
| -------------------------------- |--------------| ------------------------------------------------------------------------------------------------------------|
| scene                            | Cesium.Scene | The cesium scene                                                                                            |
| is-active                        | boolean      | If `true`, the compass will be displayed                                                                    |
| fly-home-callback                | callback     | On double-click on the gyro, this callback will be called                                                   |
| cesium-lazy-load-listener-event  | string       | `optional` When set, it will initialize cesium-compass, when this event is called - for lazy loading Cesium | 

**Set Cesium**  
You have to set Cesium on window

**Translations**  
There are translations for @geoinfo/cesium-navigations. It will show the english version as the default. You can set one of these languages:
* English: "en_US"
* German: "de_DE"


## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0.html).  @geoinfo/cesium-navigation is free for both commercial and non-commercial use.

## Demo
At the moment the only available demo is for the original project: http://larcius.github.io/cesium-navigation/
