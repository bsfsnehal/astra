/**
 * WordPress dependencies.
 */
import {
	switchUserToAdmin,
	switchUserToTest,
	visitAdminPage,
} from '@wordpress/e2e-test-utils';

/**
 * Delete a user account.
 *
 * @param {string} username User name.
 */
export async function deleteUser( username ) {
	await switchUserToAdmin();
	await visitAdminPage( 'users.php' );

	const [ userLink ] = await page.$x(
		`//td[ @data-colname="Username"]//a[contains(text(), "${ username }") ]`,
	);

	if ( ! userLink ) {
		await switchUserToTest();
		return;
	}

	// Focus to unveil actions
	await userLink.focus();

	// Tab twice to focus 'Delete'
	await page.keyboard.press( 'Tab' );
	await page.keyboard.press( 'Tab' );

	await Promise.all( [
		page.keyboard.press( 'Enter' ),
		page.waitForNavigation( { waitUntil: 'networkidle0' } ),
	] );

	//  Select radio button to delete all the content.
	await page.click( 'input#delete_option0' );

	// Confirm
	await Promise.all( [
		page.click( 'input#submit' ),
		page.waitForNavigation( { waitUntil: 'networkidle0' } ),
	] );
	await switchUserToTest();
}
