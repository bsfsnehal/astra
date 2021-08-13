import fetch from 'node-fetch';
import { createURL } from '@wordpress/e2e-test-utils';

export const setCustomize = async ( data ) => {
	return await fetch(
		createURL( '/wp-json/astra/v1/e2e-utils/set-astra-settings' ),
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify( { settings: data } ),
		},
	);
};

export const getCustomizrSettings = async ( key ) => {
	return await fetch(
		createURL( `/wp-json/astra/v1/e2e-utils/get-astra-settings` ) + `?key=${ key }`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
	).then( ( response ) => response.json() );
};
