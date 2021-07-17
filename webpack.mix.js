const mix = require( 'laravel-mix' );
const RTLCSSPlugin = require( 'rtlcss-webpack-mix-plugin' );
require( '@tinypixelco/laravel-mix-wp-blocks' );

mix
	.webpackConfig( () => {
		return {
			plugins: [
				new RTLCSSPlugin( {
					filename: '[name]-rtl.css',
					minify: false,
				} ),
			],
		};
	} );

mix
	.sass( 'sass/style.scss', 'assets/css/unminified' )
	.sass( 'sass/style-flex.scss', 'assets/css/unminified' )
	.sass( 'sass/main.scss', 'assets/css/unminified' )
	.sass( 'sass/frontend.scss', 'assets/css/unminified' )
	.sass( 'sass/site/navigation/menu-animation.scss', 'assets/css/unminified' )
	.sass( 'sass/media/galleries.scss', 'assets/css/unminified' )
	.sass( 'sass/editor-style.scss', 'assets/css/unminified' )
	.sass( 'sass/admin/block-editor-styles.scss', 'inc/assets/css' )
	.sass( 'sass/site/compatibility/bne-flyout.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/contact-form-7-main.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/contact-form-7.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/divi-builder.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/edd-grid.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/edd.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/gravity-forms.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/learndash.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/lifterlms-flex.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/lifterlms.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/site-origin.scss', 'assets/css/unminified/compatibility' )
	.sass( 'sass/site/compatibility/page-builder/bb-plugin.scss', 'assets/css/unminified/compatibility/page-builder' )
	.sass( 'sass/site/compatibility/page-builder/vc-plugin.scss', 'assets/css/unminified/compatibility/page-builder' )
	.options( {
		processCssUrls: false,
		postCss: [ require( 'postcss-flexibility' ) ],
	} );

// mix
// 	.block( 'inc/customizer/extend-custom-controls/src/index.js', 'inc/customizer/extend-custom-controls/build' );
