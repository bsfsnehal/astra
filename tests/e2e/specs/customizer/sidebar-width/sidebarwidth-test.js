import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
    describe('Sidebar width', () => {
        it( 'Width of sidebar  should apply correctly', async () => {
            const sidebarWidth = {
                'site-sidebar-width': '40%',
            };
                await setCustomize( sidebarWidth );
                await page.goto( createURL( '/' ), {
                    waitUntil: 'networkidle0',
                } );
                await page.waitForSelector( '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary' );
                await expect( {
                    selector: '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary',
                    property: '',
                }).cssValueToBe( `` );  
         });
    });