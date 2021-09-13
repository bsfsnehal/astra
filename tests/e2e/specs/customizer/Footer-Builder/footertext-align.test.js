import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
import {__experimentalScrollable}from  '@wordpress/e2e-test-utils';
describe( 'copyright Footer alignment settings in the customizer', () => {
        it( 'copyright text alignment should apply corectly', async () => {
            const copyrightAlign = {
                'footer-copyright-alignment':'center',
            };

            await setCustomize( copyrightAlign );
            await page.goto( createURL( '/' ), {
                waitUntil: 'networkidle0',
                } );
            await expect( {
                selector: '.ast-footer-copyright',
                property: 'text-align',
            } ).cssValueToBe( `center`);

            
        });

   
});