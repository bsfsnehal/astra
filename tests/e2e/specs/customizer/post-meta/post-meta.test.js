import { wpDataSelect } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';
import {createURL, createNewPost, publishPost,} from '@wordpress/e2e-test-utils';
describe( 'Post meta setting for sidebar', () => {
	it( 'position of Sidebar for page as LEFT should apply correctly', async () => {
        const pageSidebar = {
            'single-page-sidebar-layout': 'left-sidebar',
        };
        await setCustomize( pageSidebar );
        await createNewPost( {
            postType: 'post',
            title: 'blog-post',
        } );
        await publishPost();
        await page.goto( createURL( 'Test-page' ), {
            waitUntil: 'networkidle0',
        } );
        await page.waitForSelector('.ast-separate-container.ast-left-sidebar #secondary');
        await expect( {
            selector: '.ast-separate-container.ast-left-sidebar #secondary',
            property: '',
        } ).cssValueToBe( `` );
	} );
} );