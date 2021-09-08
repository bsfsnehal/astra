import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from "../../../../utils/set-customize";
describe('Apply Menu spacing under header builder in the customizer', () => {
	it( 'menu spacing style should apply corectly', async () => {
         const menuspacing = {
            'header-menu1-menu-spacing':'30px',
                   
         };
               await setCustomize( menuspacing );

            await page.goto( createURL( '/' ), {
            waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '#ast-desktop-header .main-navigation a' );

            await expect( {
            selector: '.ast-builder-menu-1 .menu-item > .menu-link',
            property: 'padding-top',
            } ).cssValueToBe(`${ menuspacing[ 'header-menu1-menu-spacing' ] }`)
        });
});
