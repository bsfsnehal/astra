import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
import {__experimentalScrollable}from  '@wordpress/e2e-test-utils';
describe( 'copyright Footer settings in the customizer', () => {
    it( 'copyright text color should apply corectly', async () => {
        const copyrightcolor = {
    
            'footer-copyright-color':'rgb(186, 18, 226)',
        };

        await setCustomize( copyrightcolor );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );

        await expect( {
            selector: '.ast-footer-copyright',
            property: 'color',
        } ).cssValueToBe( `rgb(186, 18, 226)`);

    });
});