import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Sidebar Layout setting in customizer', () => {
    it( 'Set Default layout as no-sidebar for sidebar', async () => {
        const Nosidebar = {
            'site-sidebar-layout': 'no-sidebar',
            
        };
        await setCustomize( Nosidebar );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.ast-no-sidebar',
            property: '',
        } ).cssValueToBe( `` );  
    });
});
