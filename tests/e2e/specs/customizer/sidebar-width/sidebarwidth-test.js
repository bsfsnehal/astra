import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
    describe('Sidebar width', () => {
        it( 'Width of sidebar  should apply correctly', async () => {
            const sidebarWidth = {
                'site-sidebar-width': '30',
                'inspector-input-control-0':'30'
            };
                await setCustomize( sidebarWidth );
                await page.goto( createURL( '/' ), {
                    waitUntil: 'networkidle0',
                } );
                await page.waitForSelector( '#secondary' );
                await expect( {
                    selector: '.secondary',
                    property: 'width',
                }).cssValueToBe(  `30px` );
        });
    });