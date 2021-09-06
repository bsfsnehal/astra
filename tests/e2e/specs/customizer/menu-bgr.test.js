import { visitAdminPage } from "@wordpress/e2e-test-utils";
import { createURL } from "@wordpress/e2e-test-utils";
import { zipObject } from "lodash";
import { setCustomize } from "../../utils/set-customize";
describe('Menu background style under header builder in the customizer', () => {
	it( 'menu background color should apply corectly', async () => {
		const menubgcolor= {

            'header-menu1-background-colors':{
                desktop: 'rgba(240, 52, 52, 1)',
                tablet: '',
				mobile: '',
       //'cursor': 'pointer',
            },

        };
        await setCustomize( menubgcolor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.main-header-menu' );
        //ast-select-input
        await expect( {
			selector: '.main-header-menu',
			property: 'background-color',
		} ).cssValueToBe( `${ menubgcolor[ 'header-menu1-background-colors' ].desktop }` );
        
    });
    })