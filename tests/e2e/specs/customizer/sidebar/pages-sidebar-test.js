import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Sidebar for pages', () => {
    it( 'Position for Sidebar for pages  should apply corectly', async () => {
        const Pagesidebar = {
            'single-page-sidebar-layout': 'left-sidebar',

        };
        await setCustomize( Pagesidebar );



		await page.goto( createURL( 'sample-page' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary',
            property: '',
        } ).cssValueToBe( `` );  
    });
});