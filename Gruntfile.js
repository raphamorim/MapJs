module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                banner: "/*MapJs was developed by Raphael Amorim \n\n GitHub Project -> http://github.com/raphamorim/mapjs*/ \n\n"
            },
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
