import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';

describe( 'copyright font size and color settings in the customizer', () => {
	it( 'copyright font size and color should apply corectly', async () => {
		const copyrightSizeColor = {
			'font-size-section-footer-copyright': {
				desktop: 10,
				tablet: '42',
				mobile: '32',
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
            'footer-copyright-color':'rgb(240, 0, 0)',
		};

		await setCustomize( copyrightSizeColor );
		
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		
		await expect( {
			selector: '.ast-footer-copyright',
			property: 'font-size',
		} ).cssValueToBe(
			`${ copyrightSizeColor[ 'font-size-section-footer-copyright' ].desktop }${ copyrightSizeColor[ 'font-size-section-footer-copyright' ][ 'desktop-unit' ] }`,
		);

		await expect( {
			selector: '.ast-footer-copyright',
			property: 'color',
		} ).cssValueToBe( `${ copyrightSizeColor[ 'footer-copyright-color' ] }` 
        );

	} );
} );