import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Container layout setting from Global option under the Customizer', () => {
	it( 'Layout for container as FULL WIDTH/ STRETCH should apply correctly', async () => {
		const contLayout = {
			'single-page-content-layout': 'page-builder',
		};
		await setCustomize( contLayout );
		await page.goto( createURL( 'sample-page' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.ast-page-builder-template .site-content #primary');
		await expect( {
			selector: '.ast-page-builder-template .site-content #primary',
			property: '',
		} ).cssValueToBe( `` );
	});
});