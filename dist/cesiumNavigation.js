!function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],h=0,m=[];h<s.length;h++)a=s[h],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(l&&l(e);m.length;)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={0:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([2,1]),n()}([,function(t,e,n){n(5);t.exports=function(t){var e="";return e+='<div class="compass" ng-if="$ctrl.isActive" title="{{ \'CESIUM_COMPASS.COMPASS\' | translate }}" ng-class="{ \'compass-active\': $ctrl.isOrbiting || $ctrl.isRotating}" ng-mousedown="$ctrl.handleMouseDown($event)" ng-dblclick="$ctrl.handleDoubleClick($event)"><div class="compass-outer-ring-background"></div><div class="compass-orbit-marker" ng-if="$ctrl.isOrbiting"><svg class="compass-svg" viewBox="0 0 145 145"><path ng-attr-d="{{ $ctrl.svgCompassRotationMarker }}"></path></svg></div><div class="compass-outer-ring" title="{{ \'CESIUM_COMPASS.COMPASS_OUTER_RING\' | translate }}"><svg class="compass-svg" viewBox="0 0 145 145"><path ng-attr-d="{{ $ctrl.svgCompassOuterRing }}"></path></svg></div><div class="compass-gyro-background"></div><div class="compass-gyro" ng-class="{ \'compass-gyro-active\': $ctrl.isOrbiting }"><svg class="compass-svg" viewBox="0 0 145 145"><path ng-attr-d="{{ $ctrl.svgCompassGyro }}"></path></svg></div></div>'}},function(t,e,n){n(11),t.exports=n(7)},,function(t,e,n){},function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty;function i(t,e){return Array.isArray(t)?function(t,e){for(var n,r="",o="",a=Array.isArray(e),s=0;s<t.length;s++)(n=i(t[s]))&&(a&&e[s]&&(n=c(n)),r=r+o+n,o=" ");return r}(t,e):t&&"object"==typeof t?function(t){var e="",n="";for(var i in t)i&&t[i]&&r.call(t,i)&&(e=e+n+i,n=" ");return e}(t):t||""}function o(t){if(!t)return"";if("object"==typeof t){var e="";for(var n in t)r.call(t,n)&&(e=e+n+":"+t[n]+";");return e}return t+""}function a(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var i=typeof e;return"object"!==i&&"function"!==i||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=c(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}e.merge=function t(e,n){if(1===arguments.length){for(var r=e[0],i=1;i<e.length;i++)r=t(r,e[i]);return r}for(var a in n)if("class"===a){var s=e[a]||[];e[a]=(Array.isArray(s)?s:[s]).concat(n[a]||[])}else if("style"===a){s=(s=o(e[a]))&&";"!==s[s.length-1]?s+";":s;var c=o(n[a]);c=c&&";"!==c[c.length-1]?c+";":c,e[a]=s+c}else e[a]=n[a];return e},e.classes=i,e.style=o,e.attr=a,e.attrs=function(t,e){var n="";for(var s in t)if(r.call(t,s)){var c=t[s];if("class"===s){c=i(c),n=a(s,c,!1,e)+n;continue}"style"===s&&(c=o(c)),n+=a(s,c,!1,e)}return n};var s=/["&<>]/;function c(t){var e=""+t,n=s.exec(e);if(!n)return t;var r,i,o,a="";for(r=n.index,i=0;r<e.length;r++){switch(e.charCodeAt(r)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}i!==r&&(a+=e.substring(i,r)),i=r+1,a+=o}return i!==r?a+e.substring(i,r):a}e.escape=c,e.rethrow=function t(e,r,i,o){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&r||o))throw e.message+=" on line "+i,e;try{o=o||n(6).readFileSync(r,"utf8")}catch(n){t(e,null,i)}var a=3,s=o.split("\n"),c=Math.max(i-a,0),u=Math.min(s.length,i+a);a=s.slice(c,u).map((function(t,e){var n=e+c+1;return(n==i?"  > ":"    ")+n+"| "+t})).join("\n");throw e.path=r,e.message=(r||"Pug")+":"+i+"\n"+a+"\n\n"+e.message,e}},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(0);Object(r.module)("geoportal").config((function(t){var e=n(8),r=n(9),i=n(10);t.translations("de_DE",e),t.translations("en_US",r),t.translations("fr_FR",i)}))},function(t){t.exports=JSON.parse('{"CESIUM_COMPASS":{"COMPASS":"Rotation: am äusseren Ring ziehen \\nVerkippung: inneren Gyroskop ziehen \\nKamera zurücksetzen: Doppelklick auf Gyroskop","COMPASS_OUTER_RING":"Kamera rotieren"}}')},function(t){t.exports=JSON.parse('{"CESIUM_COMPASS":{"COMPASS":"Drag outer ring: rotate view. \\nDrag inner gyroscope: free orbit. \\nDouble-click: reset view. \\nTIP: You can also free orbit by holding the CTRL key and dragging the map.","COMPASS_OUTER_RING":"Click and drag to rotate the camera"}}')},function(t){t.exports=JSON.parse('{"CESIUM_COMPASS":{"COMPASS":"Drag outer ring: rotate view. \\nDrag inner gyroscope: free orbit. \\nDouble-click: reset view. \\nTIP: You can also free orbit by holding the CTRL key and dragging the map.","COMPASS_OUTER_RING":"Click and drag to rotate the camera"}}')},function(t,e,n){"use strict";n.r(e);var r=n(0),i=(n(4),n(1)),o=n.n(i),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return a(t,null,[{key:"SVG_COMPASS_OUTER_RING",get:function(){return"m 66.5625,0 0,15.15625 3.71875,0 0,-10.40625 5.5,10.40625 4.375,0 0,-15.15625 -3.71875,0 0,10.40625 L 70.9375,0 66.5625,0 z M\n        72.5,20.21875 c -28.867432,0 -52.28125,23.407738 -52.28125,52.28125 0,28.87351 23.413818,52.3125 52.28125,52.3125 28.86743,0\n        52.28125,-23.43899 52.28125,-52.3125 0,-28.873512 -23.41382,-52.28125 -52.28125,-52.28125 z m 0,1.75 c 13.842515,0 26.368948,5.558092\n        35.5,14.5625 l -11.03125,11 0.625,0.625 11.03125,-11 c 8.9199,9.108762 14.4375,21.579143 14.4375,35.34375 0,13.764606 -5.5176,26.22729\n        -14.4375,35.34375 l -11.03125,-11 -0.625,0.625 11.03125,11 c -9.130866,9.01087 -21.658601,14.59375 -35.5,14.59375 -13.801622,0\n        -26.321058,-5.53481 -35.4375,-14.5 l 11.125,-11.09375 c 6.277989,6.12179 14.857796,9.90625 24.3125,9.90625 19.241896,0 34.875,-15.629154\n        34.875,-34.875 0,-19.245847 -15.633104,-34.84375 -34.875,-34.84375 -9.454704,0 -18.034511,3.760884 -24.3125,9.875 L 37.0625,36.4375 C\n        46.179178,27.478444 58.696991,21.96875 72.5,21.96875 z m -0.875,0.84375 0,13.9375 1.75,0 0,-13.9375 -1.75,0 z M 36.46875,37.0625\n        47.5625,48.15625 C 41.429794,54.436565 37.65625,63.027539 37.65625,72.5 c 0,9.472461 3.773544,18.055746 9.90625,24.34375 L 36.46875,107.9375\n        c -8.96721,-9.1247 -14.5,-21.624886 -14.5,-35.4375 0,-13.812615 5.53279,-26.320526 14.5,-35.4375 z M 72.5,39.40625 c 18.297686,0\n        33.125,14.791695 33.125,33.09375 0,18.302054 -14.827314,33.125 -33.125,33.125 -18.297687,0 -33.09375,-14.822946 -33.09375,-33.125\n        0,-18.302056 14.796063,-33.09375 33.09375,-33.09375 z M 22.84375,71.625 l 0,1.75 13.96875,0 0,-1.75 -13.96875,0 z m 85.5625,0 0,1.75\n        14,0 0,-1.75 -14,0 z M 71.75,108.25 l 0,13.9375 1.71875,0 0,-13.9375 -1.71875,0 z"}},{key:"SVG_COMPASS_GYRO",get:function(){return"m 72.71875,54.375 c -0.476702,0 -0.908208,0.245402 -1.21875,0.5625 -0.310542,0.317098 -0.551189,0.701933 -0.78125,1.1875\n        -0.172018,0.363062 -0.319101,0.791709 -0.46875,1.25 -6.91615,1.075544 -12.313231,6.656514 -13,13.625 -0.327516,0.117495 -0.661877,0.244642\n        -0.9375,0.375 -0.485434,0.22959 -0.901634,0.471239 -1.21875,0.78125 -0.317116,0.310011 -0.5625,0.742111 -0.5625,1.21875 l 0.03125,0 c\n        0,0.476639 0.245384,0.877489 0.5625,1.1875 0.317116,0.310011 0.702066,0.58291 1.1875,0.8125 0.35554,0.168155 0.771616,0.32165\n        1.21875,0.46875 1.370803,6.10004 6.420817,10.834127 12.71875,11.8125 0.146999,0.447079 0.30025,0.863113 0.46875,1.21875 0.230061,0.485567\n        0.470708,0.870402 0.78125,1.1875 0.310542,0.317098 0.742048,0.5625 1.21875,0.5625 0.476702,0 0.876958,-0.245402 1.1875,-0.5625\n        0.310542,-0.317098 0.582439,-0.701933 0.8125,-1.1875 0.172018,-0.363062 0.319101,-0.791709 0.46875,-1.25 6.249045,-1.017063\n        11.256351,-5.7184 12.625,-11.78125 0.447134,-0.1471 0.86321,-0.300595 1.21875,-0.46875 0.485434,-0.22959 0.901633,-0.502489\n        1.21875,-0.8125 0.317117,-0.310011 0.5625,-0.710861 0.5625,-1.1875 l -0.03125,0 c 0,-0.476639 -0.245383,-0.908739 -0.5625,-1.21875 C\n        89.901633,71.846239 89.516684,71.60459 89.03125,71.375 88.755626,71.244642 88.456123,71.117495 88.125,71 87.439949,64.078341\n        82.072807,58.503735 75.21875,57.375 c -0.15044,-0.461669 -0.326927,-0.884711 -0.5,-1.25 -0.230061,-0.485567 -0.501958,-0.870402\n        -0.8125,-1.1875 -0.310542,-0.317098 -0.710798,-0.5625 -1.1875,-0.5625 z m -0.0625,1.40625 c 0.03595,-0.01283 0.05968,0 0.0625,0 0.0056,0\n        0.04321,-0.02233 0.1875,0.125 0.144288,0.147334 0.34336,0.447188 0.53125,0.84375 0.06385,0.134761 0.123901,0.309578 0.1875,0.46875\n        -0.320353,-0.01957 -0.643524,-0.0625 -0.96875,-0.0625 -0.289073,0 -0.558569,0.04702 -0.84375,0.0625 C 71.8761,57.059578 71.936151,56.884761\n        72,56.75 c 0.18789,-0.396562 0.355712,-0.696416 0.5,-0.84375 0.07214,-0.07367 0.120304,-0.112167 0.15625,-0.125 z m 0,2.40625 c 0.448007,0\n        0.906196,0.05436 1.34375,0.09375 0.177011,0.592256 0.347655,1.271044 0.5,2.03125 0.475097,2.370753 0.807525,5.463852 0.9375,8.9375\n        -0.906869,-0.02852 -1.834463,-0.0625 -2.78125,-0.0625 -0.92298,0 -1.802327,0.03537 -2.6875,0.0625 0.138529,-3.473648 0.493653,-6.566747\n        0.96875,-8.9375 0.154684,-0.771878 0.320019,-1.463985 0.5,-2.0625 0.405568,-0.03377 0.804291,-0.0625 1.21875,-0.0625 z m -2.71875,0.28125\n        c -0.129732,0.498888 -0.259782,0.987558 -0.375,1.5625 -0.498513,2.487595 -0.838088,5.693299 -0.96875,9.25 -3.21363,0.15162\n        -6.119596,0.480068 -8.40625,0.9375 -0.682394,0.136509 -1.275579,0.279657 -1.84375,0.4375 0.799068,-6.135482 5.504716,-11.036454\n        11.59375,-12.1875 z M 75.5,58.5 c 6.043169,1.18408 10.705093,6.052712 11.5,12.15625 -0.569435,-0.155806 -1.200273,-0.302525 -1.875,-0.4375\n        -2.262525,-0.452605 -5.108535,-0.783809 -8.28125,-0.9375 -0.130662,-3.556701 -0.470237,-6.762405 -0.96875,-9.25 C 75.761959,59.467174\n        75.626981,58.990925 75.5,58.5 z m -2.84375,12.09375 c 0.959338,0 1.895843,0.03282 2.8125,0.0625 C 75.48165,71.267751 75.5,71.871028\n        75.5,72.5 c 0,1.228616 -0.01449,2.438313 -0.0625,3.59375 -0.897358,0.0284 -1.811972,0.0625 -2.75,0.0625 -0.927373,0 -1.831062,-0.03473\n        -2.71875,-0.0625 -0.05109,-1.155437 -0.0625,-2.365134 -0.0625,-3.59375 0,-0.628972 0.01741,-1.232249 0.03125,-1.84375 0.895269,-0.02827\n        1.783025,-0.0625 2.71875,-0.0625 z M 68.5625,70.6875 c -0.01243,0.60601 -0.03125,1.189946 -0.03125,1.8125 0,1.22431 0.01541,2.407837\n        0.0625,3.5625 -3.125243,-0.150329 -5.92077,-0.471558 -8.09375,-0.90625 -0.784983,-0.157031 -1.511491,-0.316471 -2.125,-0.5\n        -0.107878,-0.704096 -0.1875,-1.422089 -0.1875,-2.15625 0,-0.115714 0.02849,-0.228688 0.03125,-0.34375 0.643106,-0.20284 1.389577,-0.390377\n        2.25,-0.5625 2.166953,-0.433487 4.97905,-0.75541 8.09375,-0.90625 z m 8.3125,0.03125 c 3.075121,0.15271 5.824455,0.446046 7.96875,0.875\n        0.857478,0.171534 1.630962,0.360416 2.28125,0.5625 0.0027,0.114659 0,0.228443 0,0.34375 0,0.735827 -0.07914,1.450633 -0.1875,2.15625\n        -0.598568,0.180148 -1.29077,0.34562 -2.0625,0.5 -2.158064,0.431708 -4.932088,0.754666 -8.03125,0.90625 0.04709,-1.154663 0.0625,-2.33819\n        0.0625,-3.5625 0,-0.611824 -0.01924,-1.185379 -0.03125,-1.78125 z M 57.15625,72.5625 c 0.0023,0.572772 0.06082,1.131112 0.125,1.6875\n        -0.125327,-0.05123 -0.266577,-0.10497 -0.375,-0.15625 -0.396499,-0.187528 -0.665288,-0.387337 -0.8125,-0.53125 -0.147212,-0.143913\n        -0.15625,-0.182756 -0.15625,-0.1875 0,-0.0047 -0.02221,-0.07484 0.125,-0.21875 0.147212,-0.143913 0.447251,-0.312472 0.84375,-0.5\n        0.07123,-0.03369 0.171867,-0.06006 0.25,-0.09375 z m 31.03125,0 c 0.08201,0.03503 0.175941,0.05872 0.25,0.09375 0.396499,0.187528\n        0.665288,0.356087 0.8125,0.5 0.14725,0.14391 0.15625,0.21405 0.15625,0.21875 0,0.0047 -0.009,0.04359 -0.15625,0.1875 -0.147212,0.143913\n        -0.416001,0.343722 -0.8125,0.53125 -0.09755,0.04613 -0.233314,0.07889 -0.34375,0.125 0.06214,-0.546289 0.09144,-1.094215 0.09375,-1.65625\n        z m -29.5,3.625 c 0.479308,0.123125 0.983064,0.234089 1.53125,0.34375 2.301781,0.460458 5.229421,0.787224 8.46875,0.9375 0.167006,2.84339\n        0.46081,5.433176 0.875,7.5 0.115218,0.574942 0.245268,1.063612 0.375,1.5625 -5.463677,-1.028179 -9.833074,-5.091831 -11.25,-10.34375 z m\n        27.96875,0 C 85.247546,81.408945 80.919274,85.442932 75.5,86.5 c 0.126981,-0.490925 0.261959,-0.967174 0.375,-1.53125 0.41419,-2.066824\n        0.707994,-4.65661 0.875,-7.5 3.204493,-0.15162 6.088346,-0.480068 8.375,-0.9375 0.548186,-0.109661 1.051942,-0.220625 1.53125,-0.34375 z M\n        70.0625,77.53125 c 0.865391,0.02589 1.723666,0.03125 2.625,0.03125 0.912062,0 1.782843,-0.0048 2.65625,-0.03125 -0.165173,2.736408\n        -0.453252,5.207651 -0.84375,7.15625 -0.152345,0.760206 -0.322989,1.438994 -0.5,2.03125 -0.437447,0.03919 -0.895856,0.0625 -1.34375,0.0625\n        -0.414943,0 -0.812719,-0.02881 -1.21875,-0.0625 -0.177011,-0.592256 -0.347655,-1.271044 -0.5,-2.03125 -0.390498,-1.948599\n        -0.700644,-4.419842 -0.875,-7.15625 z m 1.75,10.28125 c 0.284911,0.01545 0.554954,0.03125 0.84375,0.03125 0.325029,0 0.648588,-0.01171\n        0.96875,-0.03125 -0.05999,0.148763 -0.127309,0.31046 -0.1875,0.4375 -0.18789,0.396562 -0.386962,0.696416 -0.53125,0.84375 -0.144288,0.147334\n        -0.181857,0.125 -0.1875,0.125 -0.0056,0 -0.07446,0.02233 -0.21875,-0.125 C 72.355712,88.946416 72.18789,88.646562 72,88.25\n        71.939809,88.12296 71.872486,87.961263 71.8125,87.8125 z"}},{key:"SVG_COMPASS_ROTATION_MARKER",get:function(){return"M 72.46875,22.03125 C 59.505873,22.050338 46.521615,27.004287 36.6875,36.875 L 47.84375,47.96875 C 61.521556,34.240041\n        83.442603,34.227389 97.125,47.90625 l 11.125,-11.125 C 98.401629,26.935424 85.431627,22.012162 72.46875,22.03125 z"}}]),t}(),c=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.orbitCursorAngle=0,this.orbitCursorOpacity=0,this.vectorScratch={},this.orbitIsLook=!1,this.orbitLastTimestamp=0,this.rotateInitialCameraAngle=0,this.rotateInitialCursorAngle=0,this.isRotating=!1,this.isOrbiting=!1,this.$element=e,this.$rootScope=n}return t.$inject=["$element","$rootScope"],u(t,[{key:"$onInit",value:function(){this.cesiumLazyLoadListenerEvent?this.$rootScope.$on(this.cesiumLazyLoadListenerEvent,this.init.bind(this)):this.init()}},{key:"init",value:function(){this.oldTransformScratch=new window.Cesium.Matrix4,this.newTransformScratch=new window.Cesium.Matrix4,this.vectorScratch=new window.Cesium.Cartesian2,this.cameraFocus=new window.Cesium.Cartesian3,this.rotateFrame=new window.Cesium.Cartesian3,this.orbitFrame=new window.Cesium.Cartesian3}},{key:"handleDoubleClick",value:function(){this.flyHomeCallback()}},{key:"handleMouseDown",value:function(t){var e=this.compassRectangle.width/2,n=this.getVector(t),r=window.Cesium.Cartesian2.magnitude(n)/e;return r<50/145?this.orbit(t):r<1?this.rotate(n):void 0}},{key:"orbit",value:function(t){this.removeOrbitEventListener(),this.removeOrbitMouseCallbacks(),this.isOrbiting=!0,this.setOrbitFrame(),this.setOrbitMouseCallbacks(),this.addOrbitEventListener(),this.updateAngleAndOpacity(t)}},{key:"updateAngleAndOpacity",value:function(t){var e=this.getVector(t),n=Math.atan2(-e.y,e.x);this.orbitCursorAngle=window.Cesium.Math.zeroToTwoPi(n-window.Cesium.Math.PI_OVER_TWO);var r=window.Cesium.Cartesian2.magnitude(e),i=this.compassRectangle.width/2,o=Math.min(r/i,1);this.orbitCursorOpacity=.5*o*o+.5}},{key:"removeOrbitEventListener",value:function(){this.removeListeners(this.orbitMouseMoveCallback,this.orbitMouseUpCallback)}},{key:"setOrbitMouseCallbacks",value:function(){this.orbitMouseMoveCallback=this.orbitMouseMove.bind(this),this.orbitMouseUpCallback=this.orbitMouseUp.bind(this)}},{key:"addOrbitEventListener",value:function(){this.addListeners(this.orbitMouseMoveCallback,this.orbitMouseUpCallback)}},{key:"orbitMouseMove",value:function(t){this.updateAngleAndOpacity(t);var e=window.Cesium.getTimestamp(),n=(e-this.orbitLastTimestamp)*(2.5*(this.orbitCursorOpacity-.5)/1e3),r=this.orbitCursorAngle+window.Cesium.Math.PI_OVER_TWO,i=Math.cos(r)*n,o=Math.sin(r)*n,a=this.lookAtFrame(this.orbitFrame);this.lookOrRotate(i,o),this.orbitFrame&&this.camera.lookAtTransform(a,void 0),this.orbitLastTimestamp=e,this.updateUi()}},{key:"orbitMouseUp",value:function(){this.updateUi(),this.isOrbiting=!1,this.removeOrbitEventListener(),this.removeOrbitMouseCallbacks()}},{key:"removeOrbitMouseCallbacks",value:function(){this.orbitMouseMoveCallback=void 0,this.orbitMouseUpCallback=void 0}},{key:"rotate",value:function(t){this.removeRotateEventListener(),this.removeRotateMouseCallbacks(),this.isRotating=!0,this.initialRotation(t),this.setRotateMouseCallbacks(),this.addRotateEventListener()}},{key:"removeRotateEventListener",value:function(){this.removeListeners(this.rotateMouseMoveCallback,this.rotateMouseUpCallback)}},{key:"setRotateMouseCallbacks",value:function(){this.rotateMouseMoveCallback=this.rotateMouseMove.bind(this),this.rotateMouseUpCallback=this.rotateMouseUp.bind(this)}},{key:"addRotateEventListener",value:function(){this.addListeners(this.rotateMouseMoveCallback,this.rotateMouseUpCallback)}},{key:"removeRotateMouseCallbacks",value:function(){this.rotateMouseMoveCallback=void 0,this.rotateMouseUpCallback=void 0}},{key:"rotateMouseUp",value:function(){this.updateUi(),this.isRotating=!1,this.removeRotateEventListener(),this.removeRotateMouseCallbacks()}},{key:"rotateMouseMove",value:function(t){var e=this.getAngle(t)-this.rotateInitialCursorAngle,n=window.Cesium.Math.zeroToTwoPi(this.rotateInitialCameraAngle-e),r=this.lookAtFrame(this.rotateFrame),i=-this.camera.heading;this.camera.rotateRight(n-i),this.rotateFrame&&this.camera.lookAtTransform(r,void 0),this.updateUi()}},{key:"updateUi",value:function(){this.setCss(".compass-orbit-marker",this.rotationMarkerRotation,this.orbitCursorOpacity),this.setCss(".compass-outer-ring",this.outerRingRotation)}},{key:"setCss",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.$element.find(t).css("transform",e).css("-webkit-transform",e).css("opacity",n)}},{key:"addListeners",value:function(t,e){document.addEventListener("mousemove",t,!1),window.addEventListener("mouseup",e,!1)}},{key:"removeListeners",value:function(t,e){document.removeEventListener("mousemove",t,!1),window.removeEventListener("mouseup",e,!1)}},{key:"setOrbitFrame",value:function(){var t=this.getFrame(),e=t.frame,n=t.isLook;this.orbitFrame=e,this.orbitIsLook=n}},{key:"lookOrRotate",value:function(t,e){this.orbitIsLook?(this.camera.look(window.Cesium.Cartesian3.UNIT_Z,-t),this.camera.look(this.camera.right,-e)):(this.camera.rotateLeft(t),this.camera.rotateUp(e))}},{key:"initialRotation",value:function(t){var e=t.x,n=t.y;if(this.rotateInitialCursorAngle=Math.atan2(-n,e),this.setRotateFrame(),this.rotateFrame){var r=this.transform;this.camera.lookAtTransform(this.rotateFrame,void 0),this.rotateInitialCameraAngle=-this.camera.heading,this.camera.lookAtTransform(r,void 0)}}},{key:"setRotateFrame",value:function(){this.rotateFrame=this.getFrame().frame}},{key:"getFrame",value:function(){var t=this.camera,e=t.positionWC,n=t.directionWC,r=new window.Cesium.Ray(e,n);this.cameraFocus=this.cameraFocus||new window.Cesium.Cartesian3;var i=this.globe.pick(r,this.scene,this.cameraFocus);return this.cameraFocus=i||this.camera.position,{frame:window.Cesium.Transforms.eastNorthUpToFixedFrame(this.cameraFocus,this.globe.ellipsoid,this.newTransformScratch),isLook:!i}}},{key:"lookAtFrame",value:function(t){if(t){var e=this.transform;return this.camera.lookAtTransform(t,void 0),e}}},{key:"getCenter",value:function(){var t=this.compassRectangle,e=t.right,n=t.left,r=t.bottom,i=t.top;return new window.Cesium.Cartesian2((e-n)/2,(r-i)/2)}},{key:"getClickLocation",value:function(t){var e=t.clientX,n=t.clientY,r=this.compassRectangle,i=r.left,o=r.top;return new window.Cesium.Cartesian2(e-i,n-o)}},{key:"getVector",value:function(t){return window.Cesium.Cartesian2.subtract(this.getClickLocation(t),this.getCenter(),this.vectorScratch)}},{key:"getAngle",value:function(t){var e=this.getVector(t);return Math.atan2(-e.y,e.x)}},{key:"svgCompassOuterRing",get:function(){return s.SVG_COMPASS_OUTER_RING}},{key:"svgCompassGyro",get:function(){return s.SVG_COMPASS_GYRO}},{key:"svgCompassRotationMarker",get:function(){return s.SVG_COMPASS_ROTATION_MARKER}},{key:"compassRectangle",get:function(){var t=this.$element.find(".compass");return c(t,1)[0].getBoundingClientRect()}},{key:"rotationMarkerRotation",get:function(){return"rotate(-"+this.orbitCursorAngle+"rad)"}},{key:"outerRingRotation",get:function(){return"rotate(-"+this.heading+"rad)"}},{key:"globe",get:function(){return this.scene.globe}},{key:"camera",get:function(){return this.scene.camera}},{key:"heading",get:function(){return this.camera.heading}},{key:"transform",get:function(){return window.Cesium.Matrix4.clone(this.camera.transform,this.oldTransformScratch)}}]),t}();e.default=l;Object(r.module)("cesium-navigation").component("cesiumCompass",{template:o()(),controller:l,bindings:{scene:"<",isActive:"<",flyHomeCallback:"<",cesiumLazyLoadListenerEvent:"<?"}})}]);