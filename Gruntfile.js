'use strict';
module.exports = function (grunt) {
	// Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

	grunt.initConfig({
		config:config,

		watch: {
			bower: {
				files: ['bower.json'],
				tasks: ['wiredep']
			},
			js: {
				files: ['<%= config.app %>/scripts/{,*/}*.js'],
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			gruntfile: {
				files: ['Gruntfile.js'],
				tasks: ['jshint:gruntfile']
			},
			styles: {
				files: ['<%= config.app %>/styles/{,*/}*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			},
			jade: {
				files: ['<%= config.app %>/{,*/}*.jade'],
				tasks:['jade']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= config.app %>/*'
				]
			}
		},

		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				hostname: 'localhost'
			},
			debug: {
				options: {
					base: [
						'<%= config.dist %>'
                    ]
				}
			}

		},

		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			gruntfile: {
				options: {
					node:true
				},
				src: 'Gruntfile.js'
			},
			src: {
				src: ['<%= config.app %>/scripts/{,*/}*.js']
			}
		},

		wiredep: {
			options: {
				dependencies: true,
				devDependencies: true,
			},
			target: {
				src: ['<%= config.app %>/{,*/}*.jade']
			}
		},

		jade : {
			options: {
				pretty:true
			},
			src: {
				expand: true,     // Enable dynamic expansion.
				cwd: '<%= config.app %>',      // Src matches are relative to this path.
				src: ['{,*/}*.jade'],
				dest: '<%= config.dist %>/',   // Destination path prefix.
				ext: '.html',   // Dest filepaths will have this extension.
				extDot: 'first'
			}
		}
	});

	grunt.registerTask('debug', function () {
        grunt.task.run([
            'jshint',
            'connect',
            'watch'
        ]);
    });

};
