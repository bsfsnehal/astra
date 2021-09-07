import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from "../../utils/set-customize";
describe('Menu spacing under header builder in the customizer', () => {
	it( 'menu spacing style should apply corectly', async () => {
		const menuspacing= {
       //'cursor': 'pointer',
       
       
       '#ast-hf-menu-1 > ul':{

            desktop:'top,right,bottom,left(40,40,40,40)',
        
             },
             

        }
        await setCustomize( menuspacing );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '#ast-hf-menu-1 > ul' );
        
        await expect( {
    	selector: '#ast-hf-menu-1 > ul',
        property: 'Menu Spacing',
        } ).cssValueToBe( `${ menuspacing[ '#ast-hf-menu-1 > ul' ].desktop }` );
                    
        
    });
    })