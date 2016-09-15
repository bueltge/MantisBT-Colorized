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
		}
	} );

	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

	// Default task(s).
	grunt.registerTask( 'default', [ 'cssmin' ] );
};