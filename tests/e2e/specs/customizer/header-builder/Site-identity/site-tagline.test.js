import { createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../../utils/set-customize';

describe( 'Site Tagline Typography settings and color settings in the customizer', () => {
	it( 'site tagline typography and color should apply corectly', async () => {
		const siteTagline = {
			'display-site-tagline-responsive': {
				// eslint-disable-next-line quote-props
				'desktop': true,
				// eslint-disable-next-line quote-props
				'tablet': true,
				// eslint-disable-next-line quote-props
				'mobile': true,
			},
			'body-font-family': 'Raleway, sans-serif',
			'body-font-variant': '800',
			'body-font-weight': '800',
			'body-text-transform': 'uppercase',
			'font-size-site-tagline': {
				// eslint-disable-next-line quote-props
				'desktop': 22,
				// eslint-disable-next-line quote-props
				'tablet': 20,
				// eslint-disable-next-line quote-props
				'mobile': 18,
				'desktop-unit': 'px',
				'tablet-unit': 'px',
				'mobile-unit': 'px',
			},
			'line-height-site-tagline': 0.99,
			'header-color-site-tagline': 'rgb(130, 36, 227)',
		};

		await setCustomize( siteTagline );

		await page.goto( createURL( '/' ), {
			waitUntil: 'networkidle0',
		} );

		await page.waitForSelector( '.site-header .site-description' );

		await expect( {
			selector: '.site-header .site-description',
			property: 'font-size',
		} ).cssValueToBe(
			`${ siteTagline[ 'font-size-site-tagline' ].desktop }${ siteTagline[ 'font-size-site-tagline' ][ 'desktop-unit' ] }`,
		);

		await expect( {
			selector: '.site-header .site-description',
			property: 'color',
		} ).cssValueToBe( `${ siteTagline[ 'header-color-site-tagline' ] }` );

		await expect( {
			selector: '.site-header .site-description',
			property: 'font-family',
		} ).cssValueToBe( `${ siteTagline[ 'body-font-family' ] }` );
	} );
} );
