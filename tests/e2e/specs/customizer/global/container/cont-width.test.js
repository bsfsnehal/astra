import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Container width setting from Global option under the Customizer', () => {
	it( 'Container width should apply correctly', async () => {
		const contWidth = {
			'site-content-width': '1960px',
		};
		await setCustomize( contWidth );
		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.ast-container');
		await expect( {
			selector: '.ast-container',
			property: 'max-width',
		} ).cssValueToBe( `${contWidth[ 'site-content-width' ]}` );
	});
});
