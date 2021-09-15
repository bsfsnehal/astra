import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Sidebar Layout setting in customizer', () => {
    it( 'Default layout for sidebar  as No Sidebar should apply corectly', async () => {
        const defSidebar = {
            'site-sidebar-layout': 'no-sidebar',

        };
        await setCustomize( defSidebar );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.ast-no-sidebar',
            property: '',
        } ).cssValueToBe( `` );  
    });
});