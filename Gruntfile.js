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
      styles: {
        files: ['sass/main.scss'],
        tasks: ['clean:styles', 'sass', 'cssmin']
      },
      scripts: {
        files: ['js/script.js'],
        tasks: ['clean:scripts', 'uglify']
      },
      livereload: {
        options: { livereload: true },
        files: ['assets/*.min.css', 'assets/*.min.js']
      }
    },
    clean: {
      options: { force: true },
      styles: ['assets/*.css'],
      scripts: ['assets/*.js']
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
          'assets/main.min.css': 'css/main.css'
        }
      }
    },
    uglify: {
      options: {
        report: 'min'
      },
      dist: {
        files: {
          'assets/script.min.js': 'js/script.js'
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
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['server']);
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('build', ['clean', 'sass', 'csslint', 'cssmin', 'uglify']);

};
