/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    connect: {
      server: {
        options: {
          port: 7000
        }
      }
    },
    watch: {
      reload: {
        files: ['**/*.scss', '**/*.html'],
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
    clean: {
      options: { force: true },
      build: ['**/*.css']
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/main.css': 'sass/main.scss'
        },
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['css/main.css']
    },
    cssmin: {
      options: {
        keepSpecialComments: 0,
        noAdvanced: true, // turn advanced optimizations off until the issue is fixed in clean-css
        report: 'min',
        selectorsMergeMode: 'ie8'
      },
      minify: {
        files: {
          'css/main.min.css': 'css/main.css'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['server']);
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('build', ['clean', 'sass', 'csslint', 'cssmin']);

};
