import { setCustomize } from '../../../utils/set-customize';
import { createURL } from '@wordpress/e2e-test-utils';
    describe( 'Footer font size under the customizer', () => {
        it( 'Font size for footer should apply corectly', async () => {
            const footerfont = {
            'font-size-section-footer-copyright': {
			desktop: 20,
			'desktop-unit': 'px',
			},
            };
            await setCustomize( footerfont );
            await page.goto( createURL( '/' ), {
            waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '.ast-footer-copyright' );
            await expect( {
            selector: '.ast-footer-copyright',
            property: 'font-size',
            } ).cssValueToBe( `20px`);
             
        });
    });