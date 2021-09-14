import { setCustomize } from "../../../utils/set-customize";
import { createURL,createNewPost,publishPost } from "@wordpress/e2e-test-utils";
describe('Sidebar for pages', () => {
    it( 'Position for Sidebar for pages  should apply corectly', async () => {
        const Postsidebar = {
            'single-post-sidebar-layout': 'left-sidebar',
            
        };
        await setCustomize( Postsidebar );
        await createNewPost( {
            postType: 'post',
            title: 'SamplePost',
        } );
        await publishPost();

		await page.goto( createURL( 'samplepost' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary',
            property: '',
        } ).cssValueToBe( `` );  
    });

});


