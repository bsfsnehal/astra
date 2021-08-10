import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import {useState} from 'react';
import {Tooltip} from '@wordpress/components';


const TypoPresetControl = props => {

	const {
		title,
		options
	} = props.control.params;

	const [props_value, setPropsValue] = useState(props.control.setting.get());

	const setCustomizerSetting = ( option, preset ) => {

		if( 'undefined' != typeof props.customizer.control( "astra-settings["+ option +"]" ) ) {
			props.customizer.control( "astra-settings["+ option +"]" ).setting.set( options[preset][option] );
		}
	}

	const onPresetClick = (presetKey) => {

		const bodyFontFamily     = options[presetKey]['body-font-family'];
		const headingsFontFamily = options[presetKey]['headings-font-family'];
		const bodyFontVariant    = options[presetKey]['body-font-variant'];
		const headingFontVariant = options[presetKey]['headings-font-variant'];
		const bodyFontWeight     = options[presetKey]['body-font-weight'];
		const headingFontWeight  = options[presetKey]['headings-font-weight'];

		AstTypography.setOption( 'astra-settings[body-font-family]', bodyFontFamily, true );
		AstTypography.setOption( 'astra-settings[headings-font-family]', headingsFontFamily, true );
		AstTypography.setOption( 'astra-settings[body-font-variant]', bodyFontVariant, true );
		AstTypography.setOption( 'astra-settings[headings-font-variant]', headingFontVariant, true );

		const typoOptions = [
			'body-font-family',
			'headings-font-family',
			'body-line-height',
			'headings-line-height',
			'font-size-body',
			'font-size-h1',
			'font-size-h2',
			'font-size-h3',
			'font-size-h4',
			'font-size-h5',
			'font-size-h6',
			'line-height-h1',
			'line-height-h2',
			'line-height-h3',
			'line-height-h4',
			'line-height-h5',
			'line-height-h6',
			'font-size-entry-title',
			'font-size-archive-summary-title',
			'font-size-page-title'
		];

		typoOptions.forEach( function( option ) {
			setCustomizerSetting( option, presetKey );
		});

		const updateTypoEvent = new CustomEvent('AstRemoteUpdateState', {
			'detail': 'typography'
		});
		document.dispatchEvent(event);

		AstTypography.setOption( 'astra-settings[body-font-weight]', bodyFontWeight, false );
		AstTypography.setOption( 'astra-settings[headings-font-weight]', headingFontWeight, false );

		setPropsValue( presetKey );
		props.control.setting.set( presetKey );

	};

	const SingleList = (props) => {
		return (
		<li
			className={
				"ast-typo-preset-item " +
				(props_value === props.preset
					? "active"
					: "")
			}
			key={props.preset}
			onClick={() => onPresetClick(props.preset)}
			dangerouslySetInnerHTML={{
				__html: window.svgIcons[props.preset],
			}}
		></li>
		)
	};

	const List = ({ className, options, selected }) => {
		return (
			<ul className={`ast-font-selector ${className}`}>
				{
				   Object.entries(options).map(
					([presetKey, item]) => {
						return (
							<Tooltip key={ presetKey + '_tooltip' } text="Tooltip Text" position="top center">
								<SingleList preset={presetKey}/>
							</Tooltip>
						)
					}
				)}
			</ul>
		)
	}

	const onResetClick =  () => {

		const defaulHeadingFontFamily = props.customizer.control( "astra-settings[headings-font-family]" ).params.default;
		AstTypography.setOption( 'astra-settings[headings-font-family]', defaulHeadingFontFamily, true );

		const defaulBodyFontFamily = props.customizer.control( "astra-settings[body-font-family]" ).params.default;
		AstTypography.setOption( 'astra-settings[body-font-family]', defaulBodyFontFamily, true );

		const options = [
			'body-font-family',
			'headings-font-family',
			'body-line-height',
			'headings-line-height',
			'font-size-body',
			'font-size-h1',
			'font-size-h2',
			'font-size-h3',
			'font-size-h4',
			'font-size-h5',
			'font-size-h6',
			'line-height-h1',
			'line-height-h2',
			'line-height-h3',
			'line-height-h4',
			'line-height-h5',
			'line-height-h6',
			'font-size-entry-title',
			'font-size-archive-summary-title',
			'font-size-page-title'
		];

		options.forEach( function( option ) {
			const defaultVal = props.customizer.control( "astra-settings[" + option + "]" ).params.default;
			props.customizer.control( "astra-settings[" + option + "]" ).setting.set( defaultVal );
		});

		// Reset Preset Option.
		setPropsValue( '' );
		props.control.setting.set( '' );
	}

    return (
        <>
            <label>
				<span className="customize-control-title" >
				{title}</span>
			</label>

			<List className="ast-typo-presets" options={options} selected={props_value} />

			<button className="ast-typography-reset-btn" onClick={e => {
				e.preventDefault();

				onResetClick();
			}} >{ __('Reset', 'astra') }</button>
        </>
    )
}

TypoPresetControl.propTypes = {
	control: PropTypes.object.isRequired
};

export default React.memo( TypoPresetControl );
