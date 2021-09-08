import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from "../../utils/set-customize";
describe('Menu background style under header builder in the customizer', () => {
	it( 'menu bgr color should apply corectly', async () => {
		const menubgcolor= {
          'background':  'rgb(199, 228, 144)',
         }
        await setCustomize( menubgcolor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '#ast-hf-menu-1 > ul' );
        //ast-select-input
        
        
    });
});