"use strict";


angular.module("cesium-navigation", ["pascalprecht.translate"]);

angular.module("cesium-navigation").config(($translateProvider: any) => {
    $translateProvider.preferredLanguage("en_US");
    $translateProvider.translations("en_US", require("../data/local-en_US.json"));
    $translateProvider.translations("de_DE", require("../data/local-de_DE.json"));
    $translateProvider.translations("fr_FR", require("../data/local-fr_FR.json"));
});
