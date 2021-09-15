import { setCustomize } from "../../../utils/set-customize";
import { createURL,createNewPost,publishPost } from "@wordpress/e2e-test-utils";
describe('Sidebar for posts', () => {
    it( 'Position for Sidebar for blog-posts  should apply corectly', async () => {
        const PostSidebar = {
            'single-post-sidebar-layout': 'left-sidebar',

        };
        await setCustomize( PostSidebar );
        await createNewPost( {
            postType: 'post',
            title: 'SamplePost',
        } );
        await publishPost();

		await page.goto( createURL( 'samplepost' ), {
			waitUntil: 'networkidle0',
		} );
        await page.waitForSelector( '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary' );

        await expect( {
            selector: '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary',
            property: '',
        } ).cssValueToBe( `` );  
    });

});