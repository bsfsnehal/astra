import { setCustomize } from "../../../../utils/set-customize";
import { createURL } from "@wordpress/e2e-test-utils";
describe('Menu hover, Spacing,Margin style under header builder', () => {
       it( 'menu hover style should apply corectly', async () => {
              const menuhoverstyle = {
              'header-menu1-menu-hover-animation': 'zoom',
              };
              await setCustomize( menuhoverstyle );

              await page.goto( createURL( '/' ), {
                     waitUntil: 'networkidle0',
                     } );
              await page.waitForSelector( '#menu-item-269 > a' );
              await expect( {
              selector: '.menu-item-269 > a',
              property: 'transition',
       
              } ).cssValueToBe('all 0.2s linear 0s' );
       });


       it( 'menu spacing style should apply corectly', async () => {
              const menuspacing = {
                 'header-menu1-menu-spacing':'30px',
                        
              };
                 await setCustomize( menuspacing );
     
                 await page.goto( createURL( '/' ), {
                 waitUntil: 'networkidle0',
                 } );
                 await page.waitForSelector( '#ast-desktop-header .main-navigation a' );
     
                 await expect( {
                 selector: '.ast-builder-menu-1 .menu-item > .menu-link',
                 property: 'padding-top',
                 } ).cssValueToBe(`${ menuspacing[ 'header-menu1-menu-spacing' ] }`)
             });
       it( 'menu margin should apply corectly', async () => {
                const menuMargin = {
               'section-hb-menu-1-margin':'40px',
                };
              
              await setCustomize( menuMargin );
              await page.goto( createURL( '/' ), {
              waitUntil: 'networkidle0',
              } );
              await page.waitForSelector( '#ast-hf-menu-1' );  
              await expect( {
              selector: '.ast-builder-menu-1 .main-header-menu, .ast-header-break-point .ast-builder-menu-1 .main-header-menu',
              property: 'margin-top',
             } ).cssValueToBe( `${ menuMargin[ 'section-hb-menu-1-margin' ] }` );  
        
    });
 });