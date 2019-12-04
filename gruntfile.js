"use strict";

const fs = require("fs");
const _ = require("underscore");


module.exports = function (grunt) {
    require("time-grunt")(grunt);

    const jsFiles = [
        "src/**/*.js",
        "gruntfile.js",
        "webpack.config.js"
    ];

    const gruntConfig = {

        webpack: {
            get dist() {
                return _.clone(require("./webpack.config"));
            }
        },

        clean: {
            dist: ["dist/js/", "dist/css/"]
        },

        eslint: {
            src: jsFiles
        },

        todo: {
            src: jsFiles
        },

        tslint: {
            options: { configuration: require("./tslint.js"), fix: false },
            client: ["src/**/*.ts"]
        },

        exec: {
            gitAddDist: {
                command: "git add dist/**"
            }
        },

        release: {
            options: {
                beforeBump: ["test"],
                beforeRelease: ["clean", "dist", "exec:gitAddDist"],
                tagName: "release-<%= version %>",
                commitMessage: "[grunt release plugin] release <%= version %>",
                tagMessage: "[grunt release plugin] version <%= version %>"
            }
        }

    };

    grunt.initConfig(gruntConfig);
    const files = fs.readdirSync("node_modules/");
    require("load-grunt-tasks")(grunt, { config: { dependencies: files } });

    grunt.registerTask("test", ["eslint", "tslint", "todo"]);
    grunt.registerTask("dist", ["clean", "webpack"]);
};
