import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from "../../../utils/set-customize";
describe('Sidebar Layout setting in customizer', () => {
    it( 'Default layout for sidebar as LEFT  should apply corectly', async () => {
        const Leftsidebar = {
            'site-sidebar-layout': 'left-sidebar',

        };
        await setCustomize( Leftsidebar );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.secondary',
            property: '',
        } ).cssValueToBe( `` );  
    });
});