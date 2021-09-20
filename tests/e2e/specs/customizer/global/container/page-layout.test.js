import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';
describe( 'Container layout setting from Global option under the Customizer', () => {
	it( 'Layout for container as BOXED should apply correctly', async () => {
		const boxLayout = {
			'single-page-content-layout': 'boxed-container',
		};
		await setCustomize( boxLayout );
		await page.goto( createURL( 'sample-page' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.site-content .ast-container');
		await expect( {
			selector: '.site-content .ast-container',
			property: '',
		} ).cssValueToBe( `` );
	});

    it( 'Layout for container should apply correctly', async () => {
		const contLayout = {
			'single-page-content-layout': 'plain-container',
		};
		await setCustomize( contLayout );
		await page.goto( createURL( 'sample-page' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.ast-container');
		await expect( {
			selector: '.ast-container',
			property: '',
		} ).cssValueToBe( `` );
	});

    it( 'Layout for container as CONTENT-BOXED should apply correctly', async () => {
		const contboxLayout = {
			'single-page-content-layout': 'content-boxed-container',
		};
		await setCustomize( contboxLayout );
		await page.goto( createURL( 'sample-page' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.site-content .ast-container');
		await expect( {
			selector: '.site-content .ast-container',
			property: '',
		} ).cssValueToBe( `` );
	});

	it( 'Layout for container as FULL WIDTH/ STRETCH should apply correctly', async () => {
		const contLayout = {
			'single-page-content-layout': 'page-builder',
		};
		await setCustomize( contLayout );
		await page.goto( createURL( 'sample-page' ), {
			waitUntil: 'networkidle0',
		} );
		await page.waitForSelector('.ast-page-builder-template .site-content #primary');
		await expect( {
			selector: '.ast-page-builder-template .site-content #primary',
			property: '',
		} ).cssValueToBe( `` );
	});

    it( 'Layout for container as DEFAULT should apply correctly', async () => {
        const contboxLayout = {
            'single-page-content-layout': 'default',
            'site-content-layout':'plain-container',
        };
        await setCustomize( contboxLayout );
        await page.goto( createURL( 'sample-page' ), {
            waitUntil: 'networkidle0',
        } );
        await page.waitForSelector('.site-content .ast-container');
        await expect( {
            selector: '.site-content .ast-container',
            property: '',
        } ).cssValueToBe( `` );
    });
});