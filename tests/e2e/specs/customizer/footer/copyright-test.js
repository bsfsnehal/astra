import { setCustomize } from '../../../utils/set-customize';
import { createURL,createNewPost, publishPost } from '@wordpress/e2e-test-utils';
describe( 'Test case for copyright footer under the customizer', () => {
it( 'Font size for footer should apply correctly', async () => {
        const footerFont = {
            'font-size-section-footer-copyright': {
                desktop: 100,
            'desktop-unit': 'px',
        },
        };
        await setCustomize( footerFont );
        await createNewPost( {
            postType: 'post',
            title: 'copyright',
        } );
        await publishPost();

        await page.goto( createURL( 'copyright' ), {
            waitUntil: 'networkidle0',
        } );
        await page.goto( createURL( '/' ), {
            waitUntil: 'networkidle0',
        } );
        await page.waitForSelector( '.ast-footer-copyright' );
        await expect( {
            selector: '.ast-footer-copyright',
            property: 'font-size',
        } ).cssValueToBe( `${ footerFont[ 'font-size-section-footer-copyright' ].desktop }${ footerFont[ 'font-size-section-footer-copyright' ][ 'desktop-unit' ] }`);

    });
    it( 'copyright footer color  should apply corectly', async () => {
        const copyrightcolor = {
            'footer-copyright-color': 'rgb(206, 20, 20)',

        };
        await setCustomize( copyrightcolor );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );
        await expect( {
            selector: '.ast-footer-copyright',
            property: 'color',
        } ).cssValueToBe( `${ copyrightcolor[ 'footer-copyright-color' ]}` );  
    });
}); 