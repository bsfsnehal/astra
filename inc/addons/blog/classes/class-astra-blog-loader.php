<?php
/**
 * Astra Blog - Customizer.
 *
 * @package Astra Addon
 * @since x.x.x
 */

if ( ! class_exists( 'Astra_Blog_Loader' ) ) {

	/**
	 * Customizer Initialization
	 *
	 * @since x.x.x
	 */
	class Astra_Blog_Loader {

		/**
		 *  Constructor
		 */
		public function __construct() {

			add_filter( 'astra_theme_defaults', array( $this, 'theme_defaults' ) );

			if ( Astra_Builder_Helper::$is_header_footer_builder_active ) {

				add_action( 'customize_preview_init', array( $this, 'preview_scripts' ) );
			}

			add_action( 'customize_register', array( $this, 'new_customize_register' ), 2 );

		}

		/**
		 * Set Options Default Values
		 *
		 * @param  array $defaults  Astra options default value array.
		 * @return array
		 */
		public function theme_defaults( $defaults ) {

			// Blog / Archive.
			$defaults['blog-space-bet-posts']     = true;
			$defaults['blog-grid']                = 3;
			$defaults['blog-grid-layout']         = 1;
			$defaults['blog-layout']              = 'blog-layout-1';
			$defaults['blog-excerpt-count']       = astra_apply_new_default_blog_values() ? 40 : 55;
			$defaults['blog-read-more-text']      = __( 'Read More »', 'astra-addon' );
			$defaults['blog-post-inside-spacing'] = array(
				'desktop'      => array(
					'top'    => 30,
					'right'  => 30,
					'bottom' => 30,
					'left'   => 30,
				),
				'tablet'       => array(
					'top'    => 30,
					'right'  => 30,
					'bottom' => 30,
					'left'   => 30,
				),
				'mobile'       => array(
					'top'    => 30,
					'right'  => 30,
					'bottom' => 30,
					'left'   => 30,
				),
				'desktop-unit' => 'px',
				'tablet-unit'  => 'px',
				'mobile-unit'  => 'px',
			);
			return $defaults;
		}

		/**
		 * Register panel, section and controls
		 *
		 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
		 */
		public function new_customize_register( $wp_customize ) {

			/**
			 * Sections
			 */
			require_once ASTRA_THEME_BLOG_DIR . 'classes/sections/class-astra-customizer-blog-configs.php'; // phpcs:ignore  WPThemeReview.CoreFunctionality.FileInclude.FileIncludeFound
		}

		/**
		 * Customizer Preview
		 */
		public function preview_scripts() {
			wp_enqueue_script( 'astra-blog-customizer-preview-js', ASTRA_THEME_BLOG_URI . 'assets/js/unminified/customizer-preview.js', array( 'customize-preview', 'astra-customizer-preview-js' ), ASTRA_THEME_VERSION, true );
			wp_localize_script(
				'astra-blog-customizer-preview-js',
				'astBlogGrid',
				array(
					'apply_grid_based_css' => astra_apply_blog_grid_css(),
				) 
			);
		}
	}
}

/**
 * Kicking this off by calling 'get_instance()' method
 */
new Astra_Blog_Loader();
