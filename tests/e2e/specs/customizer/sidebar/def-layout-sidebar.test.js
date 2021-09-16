import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';
    describe( 'Default layout for Sidebar setting in customizer', () => {
        it( 'Default layout of sidebar from customizer should apply correctly', async () => {
            const leftSidebar = {
                'site-sidebar-layout': 'left-sidebar',
            };
            await setCustomize( leftSidebar );
            await page.goto( createURL( '/' ), {
                waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '.ast-separate-container.ast-left-sidebar #secondary' );
            await expect( {
                selector: '.secondary',
                property: '',
            } ).cssValueToBe( `` );  
        });
        it( 'Default layout of sidebar as No Sidebar should apply correctly', async () => {
            const defSidebar = {
                'site-sidebar-layout': 'no-sidebar',
            };
            await setCustomize( defSidebar );
            await page.goto( createURL( '/' ), {
                waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '.ast-no-sidebar' );
            await expect( {
                selector: '.ast-no-sidebar',
                property: '',
            } ).cssValueToBe( `` );  
        });
        it( 'Default layout of sidebar as RIGHT should apply correctly', async () => {
            const rightSidebar = {
                'site-sidebar-layout': 'right-sidebar',
            };
            await setCustomize( rightSidebar );
            await page.goto( createURL( '/' ), {
                waitUntil: 'networkidle0',
            } );
            await page.waitForSelector( '.ast-right-sidebar #secondary' );
            await expect( {
                selector: '.ast-right-sidebar #secondary',
                property: '',
            } ).cssValueToBe( `` );  
        });
    });
