module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.map(pkg.licenses) %> */\n',

    // Task configuration.
    watch: {
    },
    clean: {
      dist: ['dist/*']
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          banner: '<%= banner %>'
        },
        files: {
          'dist/<%= pkg.name %>.css': 'scss/main.scss'
        }
      }
    },
    csscomb: {
      options: {
        config: '.csscomb.json'
      },
      dist: {
        files: {
            'dist/<%= pkg.name %>.css': 'dist/<%= pkg.name %>.css'
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['dist/<%= pkg.name %>.css']
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
          'dist/<%= pkg.name %>.min.css': 'dist/<%= pkg.name %>.css'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['clean', 'sass', 'csscomb', 'csslint', 'cssmin']);

};
