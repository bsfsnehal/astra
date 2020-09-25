import Background from './background.js';

export const backgroundControl = wp.customize.astraControl.extend( {
	renderContent: function renderContent() {
		let control = this;
	ReactDOM.render( <Background control={ control } />, control.container[0] );
	},
	ready: function() {
		'use strict';
		jQuery('html').addClass('background-colorpicker-ready');
		let control = this;
		jQuery(document).mouseup(function(e){
			var container = jQuery(control.container);
			// If the target of the click isn't the container nor a descendant of the container.
			if (!container.is(e.target) && container.has(e.target).length === 0){
				container.find('.components-button.astra-color-icon-indicate.open').click();
			}
		});
	},
} );
