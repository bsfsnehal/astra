import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Sidebar Layout setting in customizer', () => {
    it( 'Default layout for sidebar  should apply corectly', async () => {
        const Sidebarlayout = {
            'site-sidebar-layout': 'left-sidebar',
            
        };
        await setCustomize( Sidebarlayout );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.secondary',
            property: '',
        } ).cssValueToBe( `` );  
    });
});
