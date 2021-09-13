import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('copyright footer link color  setting in customizer', () => {
    it( 'copyright footer link color  should apply corectly', async () => {
        const copyrightLinkcolor = {
            'mce-container-body mce-flow-layout': 'rgb(58,58,58)',
            
        };
        await setCustomize( copyrightLinkcolor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.ast-footer-copyright',
            property: 'color',
        } ).cssValueToBe( `rgb(58,58,58)` );  
    });
});




