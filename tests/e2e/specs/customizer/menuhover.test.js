import { visitAdminPage } from "@wordpress/e2e-test-utils";
import { createURL } from "@wordpress/e2e-test-utils";
import { zipObject } from "lodash";
import { setCustomize } from "../../utils/set-customize";
describe('Menu hover style under header builder in the customizer', () => {
	it( 'menu hover style should apply corectly', async () => {
		const menuhoverstyle= {

        'ast-select-input':'zoom',
       'header-menu1-menu-hover-animation': 'zoom',
       //'cursor': 'pointer',

        }
        await setCustomize( menuhoverstyle );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '#ast-hf-menu-1' );
        //ast-select-input
        
    });
    })