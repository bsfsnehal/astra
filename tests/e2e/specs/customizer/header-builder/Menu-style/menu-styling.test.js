import { setCustomize } from "../../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Menu hover style under header builder in the customizer', () => {
	it( 'menu hover style should apply corectly', async () => {
		 const menuhoverstyle = {
              'header-menu1-menu-hover-animation': 'zoom',
       

         };
         await setCustomize( menuhoverstyle );

		 await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		 } );
         await page.waitForSelector( '.main-header-menu' );
         await expect( {
            selector: '.main-header-menu',
            property: 'transition',
            } ).cssValueToBe( `${ menuhoverstyle[ 'header-menu1-menu-hover-animation' ]}` );
        
    });
    

    it( 'menu spacing style should apply corectly', async () => {
         const menuspacing = {
              'customize-control-title':'Menu Spacing',
              '#customize-control-astra-settings-header-menu1-menu-spacing':{
                desktop:'top,right,bottom,left(40,40,40,40)',
            
                 },
         };
         await setCustomize( menuspacing );
    
         await page.goto( createURL( '/' ), {
                waitUntil: 'networkidle0',
            } );
         await page.waitForSelector( '.ast-builder-menu-1 .menu-item > .menu-link' );
            
         await expect( {
            selector: '.ast-builder-menu-1 .menu-item > .menu-link',
            property: 'padding',
            } ).cssValueToBe( `${ menuspacing[ '#customize-control-astra-settings-header-menu1-menu-spacing' ].desktop }` );
     })
            it( 'menu margin should apply corectly', async () => {
                const menuMargin = {
                    'ul.ast-spacing-wrapper.desktop.active':{
                   desktop:'top,right,bottom,left(40,40,40,40)',
                   },
                };
         await setCustomize( menuMargin );
         await page.goto( createURL( '/' ), {
                waitUntil: 'networkidle0',
                } );
         await page.waitForSelector( '#ast-hf-menu-1 ul' );  
         await expect( {
              selector: '#ast-hf-menu-1 > ul',
              property: 'Menu Spacing',
             } ).cssValueToBe( `${ menuMargin[ 'ul.ast-spacing-wrapper.desktop.active' ].desktop }` );  
        
    });
});