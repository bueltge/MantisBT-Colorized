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
			add_banner: {
				options: {
					banner: '/* My minified css file */'
				},
				files:   {
					'colorized.css': []
				}
			},
			combine:    {
				files: {
					'colorized.css': [ 'assets/css/default.css', 'assets/css/open-sans.css', 'assets/css/buttons.css', 'assets/css/colorized.css' ]
				}
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

	// Default task(s).
	grunt.registerTask( 'default', [ 'cssmin' ] );
};