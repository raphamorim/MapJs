module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            core: {
                src: "src/**/*.js",
                dest: "build/mapjs.js"
            }
        },

        uglify: {
            "build/mapjs.min.js": "<%= concat.core.dest %>"
        },
    });

    [   "grunt-contrib-concat",
        "grunt-contrib-uglify"
    ].forEach(grunt.loadNpmTasks);

    grunt.registerTask("default", ["concat:core", "uglify"]);
}
