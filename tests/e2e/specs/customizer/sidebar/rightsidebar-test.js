import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Sidebar Layout setting in customizer', () => {
    it( 'Default layout as right sidebar  should apply corectly', async () => {
        const Rightsidebar = {
            '[site-sidebar-layout]': 'right-sidebar',
            
        };
        await setCustomize( Rightsidebar );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.secondary',
            property: '',
        } ).cssValueToBe( `` );  
    });
});
