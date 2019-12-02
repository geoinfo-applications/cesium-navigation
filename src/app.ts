"use strict";

import { module } from "angular";


// @ts-ignore
module("geoportal").config(($translateProvider) => {

    const translationDE = require("../data/local-de_DE.json");
    const translationEN = require("../data/local-en_US.json");
    const translationFR = require("../data/local-fr_FR.json");

    $translateProvider.translations("de_DE", translationDE);
    $translateProvider.translations("en_US", translationEN);
    $translateProvider.translations("fr_FR", translationFR);
});
