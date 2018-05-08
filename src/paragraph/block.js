//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const AlignmentToolbar = wp.blocks.AlignmentToolbar;
const BlockControls = wp.blocks.BlockControls;
const Fragment = wp.element.Fragment;
const RichText = wp.blocks.RichText;

registerBlockType( 'eleven-online/block-paragraph', {
	title: __( 'Paragraph' ),
	icon: 'editor-paragraph',
	category: 'common',
	keywords: [
		__( '11 Online' ),
		__( 'Paragraph' ),
		__( 'Eleven Online' ),
	],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
			default: [],
		},
		align: {
			type: 'string',
		},
		placeholder: {
			type: 'string'
		}	
	},

	edit: function( {attributes, setAttributes, className} ) {
		const { align, content, placeholder } = attributes;
		return (
			<Fragment>

				<BlockControls>
					<AlignmentToolbar
						value={ align }
						onChange={ ( nextAlign ) => {
							setAttributes( { align: nextAlign } );
						} }
					/>
				</BlockControls>

				<RichText
					tagName="p"
					className={'eleven-online-paragraph ' + className}
					value={ content }
					style={{textAlign: align}}
					onChange={ ( nextContent ) => {
						setAttributes( {
							content: nextContent,
						} );
					} }
					placeholder={ placeholder || __( 'Add text or type / to add content' ) }
				/>

			</Fragment>

		);
	},

	save: function({attributes, className}) {
		const { align, content } = attributes;
		return (
			<RichText.Content
				tagName="p"
				style={{textAlign: align}}
				className={ className ? className : null }
				value={ content }
			/>
		);
	},
} );
