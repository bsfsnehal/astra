import { visitAdminPage } from "@wordpress/e2e-test-utils";
import { createURL } from "@wordpress/e2e-test-utils";

import { setCustomize } from "../../utils/set-customize";
describe('Menu background style under header builder in the customizer', () => {
	it( 'menu bgr color should apply corectly', async () => {
		const menuTextcolor= {

        'header-menu1-text-colors': 'rgba(0,0,0,1)',
       
       //'cursor': 'pointer',

        }
        await setCustomize( menuTextcolor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        
        
    });
 });