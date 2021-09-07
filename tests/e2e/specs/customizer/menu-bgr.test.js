// import { visitAdminPage } from "@wordpress/e2e-test-utils";
// import { createURL } from "@wordpress/e2e-test-utils";
// import { zipObject } from "lodash";
// import { setCustomize } from "../../utils/set-customize";
// describe('Menu background style under header builder in the customizer', () => {
// 	it( 'menu background color should apply corectly', async () => {
// 		const menubgcolor= {

//             'header-menu1-background-colors':{
//                 desktop: 'rgb(240, 52, 52)',
//                 tablet: '',
// 				mobile: '',
//        //'cursor': 'pointer',
//             },

//         };
//         await setCustomize( menubgcolor );

// 		await page.goto( createURL( '/' ), {
// 			waitUntil: 'networkidle0',
// 		} );
//         await page.waitForSelector( 'ast-hf-menu-1' );
//         //ast-select-input
//         await expect( {
// 			selector: 'ast-hf-menu-1',
// 			property: 'background-color',
// 		} ).cssValueToBe( `${ menubgcolor[ 'header-menu1-background-colors' ].desktop }` );
        
//     });
//     })



import { createURL } from "@wordpress/e2e-test-utils";

import { setCustomize } from "../../utils/set-customize";
describe('Menu background style under header builder in the customizer', () => {
	it( 'menu bgr color should apply corectly', async () => {
		const menubgcolor= {
          'background':  'rgb(199, 228, 144)',
          'background': 'rgb(199, 228, 144)',
         }
        await setCustomize( menubgcolor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '#ast-hf-menu-1 > ul' );
        //ast-select-input
        
        
    });
    })