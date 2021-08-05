import{ createURL } from '@wordpress/e2e-test-utils';
import { setCustomize } from '../../../utils/set-customize';
describe( 'breadcrumb Typography settings in the customizer', () => {
    it( 'breadcrumb typography should apply corectly', async () =>
       {
        const breadcrumbFont = {
            'breadcrumb-position' : 'astra_header_primary_container_after',
            'breadcrumb-font-family': 'Raleway, sans-serif',
            'breadcrumb-font-weight': '800',
            'breadcrumb-text-transform': 'uppercase',
            'breadcrumb-font-size': {
                desktop: 72,
                tablet: '42',
                mobile: '32',
                'desktop-unit': 'px',
                'tablet-unit': 'px',
                'mobile-unit': 'px',
            },
            'breadcrumb-line-height': 0.99,
        };

        await setCustomize( breadcrumbFont );
        await page.goto( createURL( '/' ), {
        waitUntil: 'networkidle0',
        } );

        await page.waitForSelector( '.ast-breadcrumbs .trail-browse, .ast-breadcrumbs .trail-items, .ast-breadcrumbs .trail-items li' );

        await expect( {
            selector: '.ast-breadcrumbs .trail-browse, .ast-breadcrumbs .trail-items, .ast-breadcrumbs .trail-items li ',
            property: 'font-size',
        } ).cssValueToBe(
           `${ breadcrumbFont[ 'breadcrumb-font-size' ].desktop }${ breadcrumbFont[ 'breadcrumb-font-size' ][ 'desktop-unit' ] }`,
        );

        await expect( {
            selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
            property: 'font-weight',
        } ).cssValueToBe(
           `${ breadcrumbFont[ 'breadcrumb-font-weight' ] }`,
        );

        await expect( {
            selector: '.ast-breadcrumbs-wrapper',
            property: 'line-height',
        } ).cssValueToBe(
           `${ breadcrumbFont[ 'breadcrumb-line-height' ] }`,
        );

        await expect( {
            selector: '.ast-breadcrumbs-wrapper',
            property: 'text-transform',
        } ).cssValueToBe(
           `${ breadcrumbFont[ 'breadcrumb-text-transform' ] }`,
        );

        await expect( {
            selector: '.ast-breadcrumbs-wrapper, .ast-breadcrumbs-wrapper a',
            property: 'font-family',
        } ).cssValueToBe( 
           `${ breadcrumbFont[ 'breadcrumb-font-family' ] }` );
       } );
} );