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
              await page.waitForSelector( '#menu-item-269 > a' );
              await expect( {
              selector: '.menu-item-269 > a',
              property: 'transition',
       
              } ).cssValueToBe('all 0.2s linear 0s' );
       });


       it( 'menu spacing style should apply corectly', async () => {
              const menuspacing = {
              'section-hb-menu-1-margin > label > div':{
                  desktop:'top,right,bottom,left(40,40,40,40)',
            
                     },
              };
              await setCustomize( menuspacing );

              await page.goto( createURL( '/' ), {
              waitUntil: 'networkidle0',
              } );
              await page.waitForSelector( '#ast-builder-menu-1 .menu-item .menu-link' );

              await expect( {
              selector: '.ast-builder-menu-1 .menu-item > .menu-link',
              property: 'padding-top',
              } ).cssValueToBe( '40px' );
       });
       it( 'menu margin should apply corectly', async () => {
                const menuMargin = {
                '[section-hb-menu-1-margin]':{
                   desktop:'top,right,bottom,left(40,40,40,40)',
                   },
                };
              await setCustomize( menuMargin );
              await page.goto( createURL( '/' ), {
              waitUntil: 'networkidle0',
              } );
              await page.waitForSelector( '#ast-hf-menu-1' );  
              await expect( {
              selector: '#ast-hf-menu-1',
              property: 'Menu Spacing',
             } ).cssValueToBe( `${ menuMargin[ '[section-hb-menu-1-margin]' ].desktop }` );  
        
    });
 });