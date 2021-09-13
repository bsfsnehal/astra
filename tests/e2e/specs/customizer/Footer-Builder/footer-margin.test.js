import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('copyright footer margin setting in customizer', () => {
    it( 'copyright text margin should apply corectly', async () => {
        const copyrightMargin = {
            'section-footer-copyright-margin': '100px',
            
        };
        await setCustomize( copyrightMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.ast-footer-copyright',
            property: 'margin-top',
        } ).cssValueToBe( `${ copyrightMargin[ 'section-footer-copyright-margin' ] }` );  
    });
});
