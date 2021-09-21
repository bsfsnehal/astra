import { setCustomize } from '../utils/set-customize';
import { createURL } from '@wordpress/e2e-test-utils';
describe( 'copyright hide on desktop settings in the customizer', () => {
    it( 'copyright hide on desktop setting should apply correctly', async () => {
        const copyrighthideonDesktop = {
            'section-footer-copyright-hide-desktop': 'grid', 
        };

            await setCustomize( copyrighthideonDesktop );
            await page.goto( createURL( 'sample' ), {
            waitUntil: 'networkidle0',
            } );
            await page.evaluate( () => {
                window.scrollBy(0, window.innerHeight);
            });
            await page.waitForSelector( '.site-below-footer-wrap[data-section="section-below-footer-builder' );

            await expect( {
                selector: '.site-below-footer-wrap[data-section="section-below-footer-builder',
                property: 'display',
            } ).cssValueToBe(`${ copyrighthideonDesktop [ 'section-footer-copyright-hide-desktop']}`,);
        });
    }) 