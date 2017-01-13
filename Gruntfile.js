module.exports = function( grunt ) {

	// Project configuration.
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),
		cssmin: {
			minify:     {
				expand: true,
				cwd:    'assets/css/',
				src:    [ '*.css', '!*.min.css' ],
				dest:   'assets/css/',
				ext:    '.min.css'
			},
			combine:    {
				files: {
					'colorized.css': [ 'assets/css/default.min.css', 'assets/css/open-sans.min.css', 'assets/css/buttons.min.css', 'assets/css/colorized.min.css' ]
				}
			}
		},
		csslint: {
			strict: {
				src: ['assets/css/*.css']
			},
			lax: {
				options: {
					csslintrc: '.csslintrc'
				},
				src: ['assets/css/default.css']
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks('grunt-contrib-csslint');

	// Default task(s).
	grunt.registerTask( 'default', [ 'cssmin', 'csslint:lax' ] );
};
