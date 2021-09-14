import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Sidebar width setting in customizer', () => {
    it( 'Sidebar width  should apply corectly', async () => {
        const Sidebarwidth = {
            'site-sidebar-width': '40%',
            
        };
        await setCustomize( Sidebarwidth );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.secondary',
            property: 'width',
        } ).cssValueToBe( `${ Sidebarwidth[ 'site-sidebar-width' ] }` );
        
    });
});
