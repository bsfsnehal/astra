import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Page layout setting from Global option under the Customizer', () => {
	it( 'Layout for page as STRETCHED LAYOUT should apply correctly', async () => {
		const stretch = {
			'page-content-layout': 'page-builder',
		};
		await setCustomize( stretch );
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