import { createURL,createNewPost,publishPost } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Blog post layout setting from Global option under the Customizer', () => {
	it( 'Layout for single post should apply correctly', async () => {
		const containedLayout = {
			'single-post-content-layout': 'plain-container',
		};
		await setCustomize( containedLayout );
        await createNewPost( {
			postType: 'post',
			title: 'blogPost-layout',
		} );
		await publishPost();
		await page.goto( createURL( 'blogPost-layout' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.site-content .ast-container');
		await expect( {
			selector: '.site-content .ast-container',
			property: '',
		} ).cssValueToBe( `` );
	});
});