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
      sass: {
        files: '../<%= pkg.name %>/**/**.scss',
        tasks: 'default',
        options: {
          livereload: true
        },
      },
    },
    connect: {
      server: {
        options: {
          port: 7000
        }
      }
    },
    clean: {
      options: { force: true },
      build: ['compiled/*.css'],
      rails: ['../app/**/*.scss']
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          banner: '<%= banner %>'
        },
        files: {
          'compiled/<%= pkg.name %>.css': '../<%= pkg.name %>/<%= pkg.name %>.scss',
          'compiled/test.css': 'test.scss'
        },
      }
    },
    csscomb: {
      options: {
        config: '.csscomb.json'
      },
      dist: {
        files: {
            'compiled/<%= pkg.name %>.css': 'compiled/<%= pkg.name %>.css',
            'compiled/test.css': 'compiled/test.css'
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: ['compiled/<%= pkg.name %>.css', 'compiled/test.css']
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
          'compiled/<%= pkg.name %>.min.css': 'compiled/<%= pkg.name %>.css'
        }
      }
    },
    copy: {
      options: {
        mode: true
      },
      main: {
        files: [
          {
            expand: true,
            cwd: '../<%= pkg.name %>/',
            src: ['**/*.scss'],
            dest: '../app/assets/stylesheets/'
          }
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Tasks
  grunt.registerTask('livereload', ['connect', 'watch']);
  grunt.registerTask('railsBuild', ['clean:rails', 'copy']);
  grunt.registerTask('default', ['clean:build', 'sass', 'csscomb', 'csslint']);

};
