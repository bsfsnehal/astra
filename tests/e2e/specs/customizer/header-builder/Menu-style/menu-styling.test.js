import { setCustomize } from "../../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Menu hover style under header builder in the customizer', () => {
	it( 'menu hover style should apply corectly', async () => {
		const menuhoverstyle= {

        'ast-select-input':'zoom',
       'header-menu1-menu-hover-animation': 'zoom',

        }
        // Menu Hover Styling
        await setCustomize( menuhoverstyle );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '#ast-hf-menu-1' );
    })
})
        it( 'menu spacing style should apply corectly', async () => {
            const menuspacing= {
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
        })
            it( 'menu margin should apply corectly', async () => {
                const menuMargin= {
                   desktop:'top,right,bottom,left(40,40,40,40)',
                }
                await setCustomize( menuMargin );
                await page.goto( createURL( '/' ), {
                    waitUntil: 'networkidle0',
                } );
                await page.waitForSelector( '#ast-hf-menu-1 ul' );  
                await expect( {
                    selector: '#ast-hf-menu-1 > ul',
                    property: 'Menu Spacing',
                    } ).cssValueToBe( `${ menuMargin[ '#ast-hf-menu-1 > ul' ].desktop }` );  
        
    });
    