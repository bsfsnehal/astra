import { setCustomize } from "../../../utils/set-customize";
import { createURL,createNewPost,publishPost } from "@wordpress/e2e-test-utils";
describe('Position of the Sidebar for Archive posts under the customizer', () => {
    it( 'Position of Sidebar for archive-posts should apply corectly', async () => {
        const archivesidebar = {
            'archive-post-sidebar-layout': 'left-sidebar',
        };
            await setCustomize( archivesidebar );
            await createNewPost( {
                postType: 'post',
            title: 'SamplePost',
            } );
            await publishPost();

            await page.goto( createURL( '2021/09' ), {
                waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '.ast-separate-container.ast-left-sidebar #secondary' );

            await expect( {
                selector: '.ast-separate-container.ast-left-sidebar #secondary',
            property: '',
            } ).cssValueToBe( `` );  
    });

});