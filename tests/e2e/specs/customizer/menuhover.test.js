import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from "../../utils/set-customize";
describe('Menu hover style under header builder in the customizer', () => {
	it( 'menu hover style should apply corectly', async () => {
		const menuhoverstyle = {
       'header-menu1-menu-hover-animation': 'zoom',
        };
        await setCustomize( menuhoverstyle );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.main-header-menu' );
        await expect( {
            selector: '.main-header-menu',
            property: 'transition',
            } ).cssValueToBe( `${ menuhoverstyle[ 'header-menu1-menu-hover-animation' ]}` );
        
    });
});