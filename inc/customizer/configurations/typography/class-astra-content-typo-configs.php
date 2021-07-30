<?php
/**
 * Styling Options for Astra Theme.
 *
 * @package     Astra
 * @author      Astra
 * @copyright   Copyright (c) 2020, Astra
 * @link        https://wpastra.com/
 * @since       Astra 1.0.15
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Astra_Content_Typo_Configs' ) ) {

	/**
	 * Customizer Sanitizes Initial setup
	 */
	class Astra_Content_Typo_Configs extends Astra_Customizer_Config_Base {

		/**
		 * Register Content Typography Customizer Configurations.
		 *
		 * @param Array                $configurations Astra Customizer Configurations.
		 * @param WP_Customize_Manager $wp_customize instance of WP_Customize_Manager.
		 * @since 1.4.3
		 * @return Array Astra Customizer Configurations with updated configurations.
		 */
		public function register_configuration( $configurations, $wp_customize ) {

			$_configs = array(

				/**
				 * Option: Heading 1 (H1) Font Size
				 */
				array(
					'name'        => ASTRA_THEME_SETTINGS . '[font-size-h1]',
					'type'        => 'control',
					'control'     => 'ast-responsive',
					'section'     => 'section-typography',
					'default'     => astra_get_option( 'font-size-h1' ),
					'transport'   => 'postMessage',
					'context'     => array(
						'',
						array(
							'setting'  => ASTRA_THEME_SETTINGS . '[heading-typo-selector]',
							'operator' => '==',
							'value'    => 'h1',
						),
					),
					'priority'    => 28,
					'title'       => __( 'Size', 'astra' ),
					'input_attrs' => array(
						'min' => 0,
					),
					'units'       => array(
						'px' => 'px',
						'em' => 'em',
					),
				),

				/**
				 * Option: Heading 2 (H2) Font Size
				 */
				array(
					'name'        => ASTRA_THEME_SETTINGS . '[font-size-h2]',
					'type'        => 'control',
					'control'     => 'ast-responsive',
					'section'     => 'section-typography',
					'default'     => astra_get_option( 'font-size-h2' ),
					'transport'   => 'postMessage',
					'context'     => array(
						'',
						array(
							'setting'  => ASTRA_THEME_SETTINGS . '[heading-typo-selector]',
							'operator' => '==',
							'value'    => 'h2',
						),
					),
					'priority'    => 28,
					'title'       => __( 'Size', 'astra' ),
					'input_attrs' => array(
						'min' => 0,
					),
					'units'       => array(
						'px' => 'px',
						'em' => 'em',
					),
				),

				/**
				 * Option: Heading 3 (H3) Font Size
				 */
				array(
					'name'        => ASTRA_THEME_SETTINGS . '[font-size-h3]',
					'type'        => 'control',
					'control'     => 'ast-responsive',
					'section'     => 'section-typography',
					'priority'    => 28,
					'default'     => astra_get_option( 'font-size-h3' ),
					'transport'   => 'postMessage',
					'context'     => array(
						'',
						array(
							'setting'  => ASTRA_THEME_SETTINGS . '[heading-typo-selector]',
							'operator' => '==',
							'value'    => 'h3',
						),
					),
					'title'       => __( 'Size', 'astra' ),
					'input_attrs' => array(
						'min' => 0,
					),
					'units'       => array(
						'px' => 'px',
						'em' => 'em',
					),
				),

				/**
				 * Option: Heading 4 (H4) Font Size
				 */
				array(
					'name'        => ASTRA_THEME_SETTINGS . '[font-size-h4]',
					'type'        => 'control',
					'control'     => 'ast-responsive',
					'section'     => 'section-typography',
					'default'     => astra_get_option( 'font-size-h4' ),
					'transport'   => 'postMessage',
					'context'     => array(
						'',
						array(
							'setting'  => ASTRA_THEME_SETTINGS . '[heading-typo-selector]',
							'operator' => '==',
							'value'    => 'h4',
						),
					),
					'priority'    => 27,
					'title'       => __( 'Size', 'astra' ),
					'input_attrs' => array(
						'min' => 0,
					),
					'units'       => array(
						'px' => 'px',
						'em' => 'em',
					),
				),

				/**
				 * Option: Heading 5 (H5) Font Size
				 */
				array(
					'name'        => ASTRA_THEME_SETTINGS . '[font-size-h5]',
					'type'        => 'control',
					'control'     => 'ast-responsive',
					'section'     => 'section-typography',
					'default'     => astra_get_option( 'font-size-h5' ),
					'transport'   => 'postMessage',
					'context'     => array(
						'',
						array(
							'setting'  => ASTRA_THEME_SETTINGS . '[heading-typo-selector]',
							'operator' => '==',
							'value'    => 'h5',
						),
					),
					'priority'    => 27,
					'title'       => __( 'Size', 'astra' ),
					'input_attrs' => array(
						'min' => 0,
					),
					'units'       => array(
						'px' => 'px',
						'em' => 'em',
					),
				),

				/**
				 * Option: Heading 6 (H6) Font Size
				 */
				array(
					'name'        => ASTRA_THEME_SETTINGS . '[font-size-h6]',
					'type'        => 'control',
					'control'     => 'ast-responsive',
					'section'     => 'section-typography',
					'default'     => astra_get_option( 'font-size-h6' ),
					'transport'   => 'postMessage',
					'context'     => array(
						'',
						array(
							'setting'  => ASTRA_THEME_SETTINGS . '[heading-typo-selector]',
							'operator' => '==',
							'value'    => 'h6',
						),
					),
					'priority'    => 27,
					'title'       => __( 'Size', 'astra' ),
					'input_attrs' => array(
						'min' => 0,
					),
					'units'       => array(
						'px' => 'px',
						'em' => 'em',
					),
				),
			);

			$configurations = array_merge( $configurations, $_configs );

			// Learn More link if Astra Pro is not activated.
			if ( ! defined( 'ASTRA_EXT_VER' ) ) {

				$_configs = array(
					/**
					 * Option: Learn More about Contant Typography
					 */
					array(
						'name'     => ASTRA_THEME_SETTINGS . '[ast-content-typography-more-feature-description]',
						'type'     => 'control',
						'control'  => 'ast-description',
						'section'  => 'section-typography',
						'priority' => 999,
						'title'    => '',
						'help'     => '<p>' . __( 'More Options Available in Astra Pro!', 'astra' ) . '</p><a href="' . astra_get_pro_url( 'https://wpastra.com/pro/', 'customizer', 'learn-more', 'upgrade-to-pro' ) . '" class="button button-secondary"  target="_blank" rel="noopener">' . __( 'Learn More', 'astra' ) . '</a>',
						'settings' => array(),
					),
				);

				$configurations = array_merge( $configurations, $_configs );

			}

			return $configurations;
		}
	}
}

new Astra_Content_Typo_Configs();


