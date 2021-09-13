import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('copyright footer font setting in customizer', () => {
    it( 'copyright font  should apply corectly', async () => {
        const copyrightFont = {
            'sub-accordion-section-section-footer-copyright': '100px',
            
        };
        await setCustomize( copyrightFont );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.colophon > div > div > div > div > div > div > h2',
            property: 'margin-top',
        } ).cssValueToBe( `${ copyrightMargin[ 'section-footer-copyright-margin' ] }` );  
    });
});
