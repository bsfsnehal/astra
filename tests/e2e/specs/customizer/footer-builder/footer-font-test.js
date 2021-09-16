import { setCustomize } from '../../../utils/set-customize';
import { createURL } from '@wordpress/e2e-test-utils';
    describe( 'Footer font size under the customizer', () => {
        it( 'Font size for footer should apply correctly', async () => {
            const footerFont = {
                'font-size-section-footer-copyright': {
                 desktop: 20,
                'desktop-unit': 'px',
			},
            };
            await setCustomize( footerFont );
            await page.goto( createURL( '/' ), {
                waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '.ast-footer-copyright' );
            await expect( {
                selector: '.ast-footer-copyright',
                property: 'font-size',
            } ).cssValueToBe( `${ footerFont[ 'font-size-section-footer-copyright' ].desktop }${ footerFont[ 'font-size-section-footer-copyright' ][ 'desktop-unit' ] }`);
             
         });
    });