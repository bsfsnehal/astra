import { createURL } from "@wordpress/e2e-test-utils";
import { setCustomize } from "../../../../utils/set-customize";

describe('Menu spacing under header builder in the customizer', () => {
	it( 'menu spacing style should apply corectly', async () => {
		const menuspacing= {
        // '#ast-hf-menu-1 > ul':{
        //  desktop:'top,bottom,left,right,(40,40,40,40)',
        //  },
        //  }
        'customize-control-title':'Menu Spacing',
        '#ast-hf-menu-1 > ul':{

            desktop:'top,right,bottom,left(40,40,40,40)',
        
             },
             
      'top':30,
      'right':30,
      'bottom':30,
      'left':30,
        }
        await setCustomize( menuspacing );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '#ast-hf-menu-1 > ul > li.page_item.page-item-168.menu-item > a' );
        
        await expect( {
    	selector: '#ast-hf-menu-1 > ul',
        property: 'Menu Spacing',
        } ).cssValueToBe( `${ menuspacing[ '#ast-hf-menu-1 > ul' ].desktop }` );
                    
        
    });
})