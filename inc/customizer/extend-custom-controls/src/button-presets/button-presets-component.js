import PropTypes from "prop-types";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "react";
import {Dashicon} from '@wordpress/components';

const ButtonPresetsComponent = (props) => {
	const { title, options } = props.control.params;
	const defaultValue = props.control.params.default;
	let value = props.control.setting.get();
	const option = props.control.params.name;

	const [state, setState] = value ? useState(value) : useState( defaultValue );

	const onChangePreset = ( presetKey ) => {
		const borderRadius = options[ presetKey ][ 'border-radius' ];
		const btnBackgroundColor = options[ presetKey ][ 'button-bg-color' ];
		const borderWidth = options[ presetKey ][ 'border-size' ];
		const padding = options[ presetKey ][ 'button-padding' ];
		const btnTextColor = options[ presetKey ][ 'button-color' ];

		/// Padding
		props.customizer
			.control( 'astra-settings[theme-button-padding]' )
			.setting.set( padding );

		props.customizer
			.control( 'astra-settings[theme-button-padding]' )
			.renderContent();

		// Border Radius.
		props.customizer
			.control( 'astra-settings[button-radius]' )
			.setting.set( borderRadius );

		// Border size.
		props.customizer
			.control( 'astra-settings[theme-button-border-group-border-size]' )
			.setting.set( borderWidth );

		if ( '' !== btnBackgroundColor ) {
			const cachedValue = props.customizer.control("astra-settings[button-bg-color]").setting.get();

			// Set button background color cached in window variable while switching to transparent button preset.
			if ( 'rgba(0,0,0,0)' === btnBackgroundColor && 'rgba(0,0,0,0)' !== cachedValue ) {
				window.cachedBtnBGColor = cachedValue;
			}

			// Set Button Background color
			props.customizer.control( 'astra-settings[button-bg-color]' ).setting.set( btnBackgroundColor );
		} else {
			let cachedValue = window.cachedBtnBGColor;
			const optionValue = props.customizer.control( 'astra-settings[button-bg-color]' ).setting.get();

			// Set option value in window cached variable if value is not transparent.
			if ( cachedValue !== optionValue && 'rgba(0,0,0,0)' !== optionValue ) {
				window.cachedBtnBGColor = optionValue;
				cachedValue = window.cachedBtnBGColor;
			}

			props.customizer.control( 'astra-settings[button-bg-color]' ).setting.set( cachedValue );
		}

		const btnTextOptionVal = props.customizer.control( 'astra-settings[button-color]' ).setting.get();

		if ( '' === btnTextOptionVal ) {
			props.customizer.control( 'astra-settings[button-color]' ).setting.set( btnTextColor );
		}

		// If button text option value is equal to default button color set text color to blank.
		// eslint-disable-next-line dot-notation
		if ( options[ 'button_04' ][ 'button-color' ] === btnTextOptionVal && '' === btnTextColor ) {
			props.customizer.control( 'astra-settings[button-color]' ).setting.set( '' );
		}

		// Set border color to #0170b9 for outline presets only when color value is empty.
		if ( 'button_04' === presetKey || 'button_05' === presetKey || 'button_06' === presetKey ) {
			const borderColor = props.customizer.control( 'astra-settings[theme-button-border-group-border-color]' ).setting.get();
			if ( '' === borderColor ) {
				props.customizer.control( 'astra-settings[theme-button-border-group-border-color]' ).setting.set( '#0170b9' );
			}
		}

		setState( presetKey );
		props.control.setting.set( presetKey );

		const event = new CustomEvent( 'AstRemoteUpdateState', {
			detail: 'btn-preset',
		} );
		document.dispatchEvent( event );
	};

	const onResetClick = () => {
		const btnOptions = [
			'button-radius',
			'theme-button-border-group-border-size',
			'theme-button-padding',
			'button-bg-color',
			'theme-button-border-group-border-size',
		];

		btnOptions.forEach( function( btnOption ) {
			const defaultVal = props.customizer.control( 'astra-settings[' + btnOption + ']' ).params.default;
			props.customizer.control( 'astra-settings[' + btnOption + ']' ).setting.set( defaultVal );
		} );

		// Reset Preset Option.
		setState( '' );
		props.control.setting.set( '' );

		const event = new CustomEvent( 'AstRemoteUpdateState', {
			detail: 'btn-preset',
		});
		document.dispatchEvent( event );
	}

	const renderBtnPresetHtml = () => {
		let htmlContent = Object.entries(options).map(([key, presetData]) => {
			return (
				<div
					className={
						"ast-btn-style-item " + (state === key ? "active" : "")
					}
					key={key}
					dangerouslySetInnerHTML={{
						__html: window.svgIcons[presetData.src],
					}}
					key={key}
					onClick={() => onChangePreset(key)}
				></div>
			);
		});

		return htmlContent;
	};

	const renderResetBtn = () => {

		let resetFlag = '' != props.control.setting.get() ? false : true;

		return <button className="ast-reset-btn components-button components-circular-option-picker__clear is-secondary is-small" disabled={ resetFlag } onClick={ e => {
			e.preventDefault();
			onResetClick();
		}}>
		<Dashicon icon='image-rotate'/>
		</button>;
	}

	return (
		<>
			<label>
				<span className="customize-control-title">{title}</span>
			</label>
			<div className="ast-btn-preset-wrap">{renderBtnPresetHtml()}</div>

			<div className="ast-reset-btn-preset-wrap">
				{renderResetBtn()}
			</div>
		</>
	);
};

ButtonPresetsComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default React.memo(ButtonPresetsComponent);
