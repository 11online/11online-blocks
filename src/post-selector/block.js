const { registerBlockType } = wp.blocks;
const { URLInput, PlainText } = wp.editor;
const Fragment = wp.element.Fragment;
const { __ } = wp.i18n;

registerBlockType( 'eleven-online/post-selector', {
	title: __( 'Post Selector' ),
	icon: {
		background: '#F04848',
		foreground: '#FFFFFF',
		src: 'admin-links',
	  },       
	category: 'common',
	keywords: [
		__( '11 Online' ),
		__( 'Post Selector' ),
		__( 'Eleven Online' ),
	],
	attributes: {
		id: {
			type: 'number',
		},
		text: {
			type: 'string',
        },
        url: {
            type: 'string',
        }
	},

	edit( { attributes, setAttributes } ) {
		return (
            <Fragment>
                <PlainText 
                    value={attributes.text}
                    placeholder={'Button Text Here'}
                    onChange={(text) => setAttributes({text})}
                />
                <URLInput
                    value={ attributes.url }
                    onChange={ ( url, post ) => setAttributes( { url, id: (post && post.id) } ) }
                />
            </Fragment>
		);
	},

	save( { attributes } ) {
		return <a className="post-selector-button button" href={'#'} data-id={attributes.id}>{ attributes.text }</a>;
	}
} );