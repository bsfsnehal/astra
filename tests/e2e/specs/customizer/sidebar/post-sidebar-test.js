import { setCustomize } from "../../../utils/set-customize";
import { createURL,createNewPost,publishPost } from "@wordpress/e2e-test-utils";
describe('Position of the Sidebar for posts under the customizer', () => {
    it( 'Position of Sidebar for blog-posts should apply corectly', async () => {
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