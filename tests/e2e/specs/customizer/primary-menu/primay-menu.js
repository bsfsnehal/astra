import {
	createURL,
} from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';

describe( 'Primary Menu typography and color settings in the customizer', () => {
	it( 'Primary Menu color & Typography should apply corectly', async () => {
		const primarymenutypography = {
			'header-menu1-font-family': "'Raleway', sans-serif",  
			'header-menu1-font-weight': '800',
			'header-menu1-text-transform': 'Uppercase',
			'header-menu1-font-size': {
				desktop: 14,
				tablet: '12',
				mobile: '10',
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
			'header-menu1-line-height': 0.99,
            'header-menu1-text-colors':'rgb(240, 0, 0)',
		};

		await setCustomize( primarymenutypography );
		
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		
		await expect( {
			selector: '.ast-builder-menu-1',
			property: 'font-family',
		} ).cssValueToBe( `${ primarymenutypography[ 'header-menu1-font-family' ] }` 
        );

		await expect( {
			selector: '.ast-builder-menu-1',
			property: 'font-size',
		} ).cssValueToBe(
			`${ primarymenutypography[ 'header-menu1-font-size' ].desktop }${ primarymenutypography[ 'header-menu1-font-size' ][ 'desktop-unit' ] }`,
		);

		await expect( {
			selector: '.ast-builder-menu-1 .main-header-menu .menu-item > .menu-link',
			property: 'font-weight',
		} ).cssValueToBe(
			`${ primarymenutypography[ 'header-menu1-font-weight' ] }`,
		);

		await expect( {
			selector: '.ast-builder-menu-1 a',
			property: 'color',
		} ).cssValueToBe( `${ primarymenutypography[ 'header-menu1-text-colors' ] }` 
        );

        

	} );
} );
