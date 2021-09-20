import { createURL,createNewPost,publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Archives layout setting from Global option under the Customizer', () => {
	it( 'Layout for Archives should apply correctly', async () => {
		const archiveLayout = {
			'archive-post-content-layout': 'content-boxed-container',
		};
		await setCustomize( archiveLayout );
        await createNewPost( {
			postType: 'post',
			title: 'content-layout',
		} );
		await publishPost();
		await page.goto( createURL( 'content-layout' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.site-content .ast-container');
		await expect( {
			selector: '.site-content .ast-container',
			property: '',
		} ).cssValueToBe( `` );
	});
});