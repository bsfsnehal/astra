import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Sidebar Layout setting in customizer', () => {
    it( 'Default layout for sidebar as RIGHT  should apply corectly', async () => {
        const rightSidebar = {
            '[site-sidebar-layout]': 'right-sidebar',

        };
        await setCustomize( rightSidebar );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.secondary',
            property: '',
        } ).cssValueToBe( `` );  
    });
});