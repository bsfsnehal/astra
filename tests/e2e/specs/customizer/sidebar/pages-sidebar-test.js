import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Position of Sidebar for pages under the Customizer', () => {
    it( 'Position of Sidebar for pages should apply corectly', async () => {
        const Pagesidebar = {
            'single-page-sidebar-layout': 'left-sidebar',
        };
            await setCustomize( Pagesidebar );

            await page.goto( createURL( 'sample-page' ), {
                waitUntil: 'networkidle0',
            } );

            await page.waitForSelector( '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary' );

            await expect( {
            selector: '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary',
            property: '',
            } ).cssValueToBe( `` );  
    });
});