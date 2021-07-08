import {
	createURL,
} from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';

describe( 'Primary Menu typography and color settings in the customizer', () => {
	it( 'Primary Menu color & Typography should apply corectly', async () => {
		const primarymenutypography = {
            'header-social-1-color':'rgb(199,39,39)',
		};

		await setCustomize( primarymenutypography );
		
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		
		await expect( {
			selector: '.ast-header-social-1-wrap .ast-social-color-type-custom svg',
			property: 'color',
		} ).cssValueToBe( `${ primarymenutypography[ 'header-social-1-color' ] }` 
        );

        

	} );
} );
