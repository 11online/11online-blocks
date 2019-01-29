<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 */
function eleven_online_block_assets() {
	// enqueue jQuery
	wp_enqueue_script('jquery');
	wp_enqueue_script(
		'11online-block_postcard-display-handler-js',
		plugins_url( 'src/postcard/display-handler.js', dirname( __FILE__ ) ),
		array( 'jquery' ), null, true
	);
	wp_enqueue_style('11online-block-style-css', plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), array( 'wp-edit-blocks' ));
} 
add_action( 'enqueue_block_assets', 'eleven_online_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 */
function eleven_online_editor_assets() {
	// enqueue jQuery
	wp_enqueue_script('jquery');
	// react code
	wp_enqueue_script(
		'11online-dev-block-js', plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-data' ), true);
	// unregister blocks
	wp_enqueue_script('11online-unregister-blocks', plugins_url( '/unregister-blocks.js', dirname( __FILE__ ) ), array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-data'), true	);

	// Styles.
	wp_enqueue_style(
		'11online-block-editor-css', plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), array( 'wp-edit-blocks' ));
} 
add_action( 'enqueue_block_editor_assets', 'eleven_online_editor_assets', 9999 );
