import { createURL, publishPost } from "@wordpress/e2e-test-utils";
import { setCustomize } from '../../../utils/set-customize';
describe( 'copyright Footer settings in the customizer', () => {
    it( 'copyright text color should apply corectly', async () => {
        const CopyrightText = {
    
            'qt_ast-footer-copyright_toolbar':'rgb(58,58,58)',
        };

        await setCustomize( CopyrightText );
     
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } ),
        await expect( {
            selector: '.ast-footer-copyright',
            property: 'color',
        } ).cssValueToBe( ` rgb(58, 58, 58)`);

    });
});