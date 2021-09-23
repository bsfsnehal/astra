import { wpDataSelect } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';
import {createURL, createNewPost, publishPost,} from '@wordpress/e2e-test-utils';
describe( 'Post meta setting for sidebar', () => {
	it( 'position of Sidebar for page as LEFT should apply correctly', async () => {
        const postSidebar = {
            'single-post-sidebar-layout': 'left-sidebar',
            'site-sidebar-layout': ' Right Sidebar',
        };
        await setCustomize( postSidebar );
        await createNewPost( {
            postType: 'post',
            title: 'blog-post',
            content:'blog post created',
        } );
        await publishPost();
        await page.goto( createURL( 'blog-post' ), {
            waitUntil: 'networkidle0',
        } );
        await page.waitForSelector('.ast-left-sidebar #secondary');
        await expect( {
            selector: '.ast-left-sidebar #secondary',
            property: '',
        } ).cssValueToBe( `` );
	} );
} );