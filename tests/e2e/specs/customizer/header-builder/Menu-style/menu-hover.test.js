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
});