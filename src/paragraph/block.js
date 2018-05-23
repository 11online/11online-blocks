//  Import CSS.
import './style.scss';
import './editor.scss';

import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { AlignmentToolbar, BlockControls, RichText, InspectorControls } = wp.editor;
const Fragment = wp.element.Fragment;
const SelectControl = wp.components.SelectControl;

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
		extraClass: {
			type: 'string',
			default: 'primary'
		},
		placeholder: {
			type: 'string'
		}	
	},

	edit: function( {attributes, setAttributes, className, isSelected} ) {
		const { align, content, placeholder, extraClass } = attributes;
		
		const controls = isSelected ? 
			<InspectorControls>
				<SelectControl
					label={ __( 'Style' ) }
					value={ extraClass }
					options={[
						{ value: 'primary', label: 'Primary'},
						{ value: 'secondary', label: 'Secondary'},
					]}
					onChange={ (value) => setAttributes( { extraClass: value } ) }
				/>
			</InspectorControls>
			: null;

		const classes = classnames(className, extraClass)
		
		return (
			<Fragment>
				{controls}
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
					className={classes}
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
		const { align, content, extraClass } = attributes;
		const classes = classnames(className, extraClass)
		return (
			<RichText.Content
				tagName="p"
				style={{textAlign: align}}
				className={ classes }
				value={ content }
			/>
		);
	},
} );
