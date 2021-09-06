import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from "../../utils/set-customize";
describe('Menu spacing under header builder in the customizer', () => {
	it( 'menu spacing style should apply corectly', async () => {
		const menuspacing= {
       //'cursor': 'pointer',
       
       
       'header-menu1-menu-spacing':{

            desktop: 'top','40':'top,right,bottom,left(10,10,10,10)',
            tablet: '',
        	mobile: '',
               //'cursor': 'pointer',
             },
            

        }
        await setCustomize( menuspacing );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '#ast-hf-menu-1' );
        //ast-select-input
        // await expect( {
    	// selector: '#ast-hf-menu-1',
        // property: 'Menu Spacing',
        // } ).cssValueToBe( `${ menuspacing[ 'header-menu1-menu-spacing' ].desktop }` );
                    
        
    });
    })