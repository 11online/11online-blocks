// mark our disallowed blocks
var disallowedBlocks = [
	'core/paragraph',
	'core/button'
];

// check if blocks are loaded and if so, remove them
function checkIfBlocksAreLoadedAndRemoveThem() {
	// set our variable for if we need to call this function again
	var blocksLoaded = false;
	// go through the blocks we have, if we find a match, set our blocks loaded to true and remove them
	wp.blocks.getBlockTypes().forEach( function( blockType ) {
		// check if core blocks are loaded
		if(!blocksLoaded && blockType.name.indexOf('core') > -1) {
			blocksLoaded = true;
		}
		// remove our blocks
		if ( disallowedBlocks.indexOf( blockType.name ) > -1 ) {
			wp.blocks.unregisterBlockType( blockType.name );
		}
	} );
	// if blocks still haven't been loaded, try again
	if(!blocksLoaded) {
		setTimeout(function() {
			checkIfBlocksAreLoadedAndRemoveThem()
		}, 500);
	}
}

checkIfBlocksAreLoadedAndRemoveThem();