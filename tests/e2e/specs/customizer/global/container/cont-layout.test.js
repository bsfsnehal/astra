import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Container layout setting from Global option under the Customizer', () => {
	it( 'Layout for container should apply correctly', async () => {
		const contLayout = {
			'single-page-content-layout': 'plain-container',
		};
		await setCustomize( contLayout );
		await page.goto( createURL( 'sample-page' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.ast-container');
		await expect( {
			selector: '.ast-container',
			property: '',
		} ).cssValueToBe( `` );
	} );
} );
