import { setCustomize } from "../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('SubMenu divider size under header builder in the customizer', () => {
	
    it( 'ubMenu divider size should apply corectly', async () => {
            const menuTextColor = {
                'component-color-indicator astra-advanced-color-indicate': 'rgb(224, 52, 52)',
            };
            await setCustomize( menuTextColor );

            await page.goto( createURL( '/' ), {
            waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '#menu-item-269 > a' );

            await expect( {
            selector: '.ast-builder-menu-1 .menu-item > .menu-link',
            property: 'color',
            } ).cssValueToBe( 'rgb(224, 52, 52)' );
        });
    });