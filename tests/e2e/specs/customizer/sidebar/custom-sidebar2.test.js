import { setCustomize } from '../../../utils/set-customize';
import { createURL,createNewPost,publishPost } from '@wordpress/e2e-test-utils';
describe( 'Position of the Sidebar for pages under the Customizer', () => {
    it( 'Position of Sidebar for pages should apply correctly', async () => {
        const pageSidebar = {
        'single-page-sidebar-layout': 'right-sidebar',
        };
            await setCustomize( pageSidebar );
            await page.goto( createURL( 'sample-page' ), {
                waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary' );
            await expect( {
                selector: '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary',
                property: '',
            } ).cssValueToBe( `` );  
    });
    it( 'Position of Sidebar for blog-posts should apply correctly', async () => {
        const postSidebar = {
        'single-post-sidebar-layout': 'left-sidebar',
        };
            await setCustomize( postSidebar );
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
    it( 'Position of Sidebar for archive-posts should apply correctly', async () => {
        const archivesidebar = {
        'archive-post-sidebar-layout': 'left-sidebar',
        };
            await setCustomize( archivesidebar );
            await createNewPost( {
                postType: 'post',
                title: 'archive-sidebar',
            } );
            await publishPost();
            await page.goto( createURL( 'archive-sidebar' ), {
                waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary' );
            await expect( {
                selector: '.ast-separate-container.ast-right-sidebar #secondary, .ast-separate-container.ast-left-sidebar #secondary',
                property: '',
            } ).cssValueToBe( `` );  
    });

});  