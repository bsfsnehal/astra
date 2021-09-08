import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from "../../../../utils/set-customize";

describe('Menu spacing under header builder in the customizer', () => {
	
    it( 'menu spacing style should apply corectly', async () => {
            const menuspacing = {
            'header-menu1-menu-spacing':{
                   desktop:'30px',
                   
             },
            };
            await setCustomize( menuspacing );

            await page.goto( createURL( '/' ), {
            waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '#menu-item-269 > a' );

            await expect( {
            selector: '.ast-builder-menu-1 .menu-item > .menu-link',
            property: 'padding-top',
            } ).cssValueToBe( '30px' );
    });
})