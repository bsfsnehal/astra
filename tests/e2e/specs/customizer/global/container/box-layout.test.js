import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Container layout setting from Global option under the Customizer', () => {
	it( 'Layout for container as BOXED should apply correctly', async () => {
		const boxLayout = {
			'single-page-content-layout': 'boxed-container',
		};
		await setCustomize( boxLayout );
		await page.goto( createURL( 'sample-page' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.site-content .ast-container');
		await expect( {
			selector: '.site-content .ast-container',
			property: '',
		} ).cssValueToBe( `` );
	});
});