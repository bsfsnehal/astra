<?php
/**
 * Astra WordPress compatibility - Dynamic CSS.
 *
 * @package astra
 * @since x.x.x
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_filter( 'astra_dynamic_theme_css', 'astra_wordpress_compat_css' );

/**
 * Astra WordPress compatibility - Dynamic CSS.
 *
 * @param string $dynamic_css Dynamic CSS.
 * @since x.x.x
 */
function astra_wordpress_compat_css( $dynamic_css ) {

	if ( Astra_Dynamic_CSS::is_wordpress_5_8_support_enabled() ) {

		$desktop_css = '
        form.wp-block-search .wp-block-search__input, .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper {
            border-color: #eaeaea;
			background: #fafafa;
        }
		.site-content form.wp-block-search .wp-block-search__inside-wrapper .wp-block-search__input {
			padding: 15px;
		}
		.wp-block-search__button svg {
            fill: currentColor;
        }';

		return $dynamic_css .= Astra_Enqueue_Scripts::trim_css( $desktop_css );
	}

	return $dynamic_css;
}
