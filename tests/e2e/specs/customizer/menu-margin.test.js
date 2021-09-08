import { createURL } from "@wordpress/e2e-test-utils";

import { setCustomize } from "../../utils/set-customize";
describe('Menu margin under header builder in the customizer', () => {
	it( 'menu margin should apply corectly', async () => {
		const menuMargin= {
           'margin-top': '100px',
            'margin-bottom': '100px',
            'margin-left': '80px',
            'margin-right': '150px',

        };
        await setCustomize( menuMargin );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '#ast-hf-menu-1 > ul' );
        //ast-select-inp

    });
});