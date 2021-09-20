import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';
describe( 'Container width setting from Global option under the Customizer', () => {
	it( 'Container width should apply correctly', async () => {
		const contWidth = {
			'site-content-width': '1100px',
            'inspector-input-control-9':'1100px'
		};
		await setCustomize( contWidth );
		await page.goto( createURL( 'sample-page' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.ast-separate-container.ast-left-sidebar #secondary',
		);
		await expect( {
			selector: '.ast-separate-container.ast-left-sidebar #secondary',
			property: '',
		} ).cssValueToBe( `` );
	} );
