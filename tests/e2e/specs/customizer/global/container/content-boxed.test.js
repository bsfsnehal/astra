import { createURL,createNewPost,publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Blog post layout setting from Global option under the Customizer', () => {
	it( 'Layout for single post should apply correctly', async () => {
		const contentLayout = {
			'single-post-content-layout': 'content-boxed-container',
		};
		await setCustomize( contentLayout );
        await createNewPost( {
			postType: 'post',
			title: 'test-layout',
		} );
		await publishPost();
		await page.goto( createURL( 'test-layout' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.site-content .ast-container');
		await expect( {
			selector: '.site-content .ast-container',
			property: '',
		} ).cssValueToBe( `` );
	});
});