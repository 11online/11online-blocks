//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks, MediaUpload } = wp.editor;
const Fragment = wp.element.Fragment;
const SelectControl = wp.components.SelectControl;
const Button = wp.components.Button;

registerBlockType( 'eleven-online/block-checkerboard', {
	title: __( 'Checkerboard' ),
	icon: 'grid-view',
	category: 'common',
	keywords: [
		__( '11 Online' ),
		__( 'Checkerboard' ),
		__( 'Eleven Online' ),
	],
	attributes: {
		checkerboardAlign: {
			type: 'string',
			default: 'right'
		},
		backgroundImage: {
			type: 'string'
		}
	},
	supports: {
	    align: true
	},

	edit: function( {attributes, setAttributes, className, isSelected} ) {
		const { checkerboardAlign, backgroundImage } = attributes;
		
		const controls = isSelected ? 
			<InspectorControls>
				<SelectControl
					label={ __( 'Left or Right' ) }
					value={ checkerboardAlign }
					options={[
						{ value: 'right', label: 'Image First'},
						{ value: 'left', label: 'Image Second'}
					]}
					onChange={ (value) => setAttributes( { checkerboardAlign: value } ) }
				/>
			</InspectorControls>
			: null;

		const mediaClassName = backgroundImage ? 'checkerboard-image' : 'checkerboard-image dashicons dashicons-format-image';

		const media = isSelected ?
			<div className='checkerboard-image' style={{background : 'url(' + backgroundImage + ')'}}>
				<MediaUpload
					onSelect={media => setAttributes({backgroundImage: media.url})}
					render={ ( { open } ) => (
						<p>
							<Button onClick={ open }>
								Open Media Library
							</Button>
						</p>
					) }
				/>
			</div>
			: <div className={mediaClassName} style={{background : 'url(' + backgroundImage + ')'}}></div>;

		return (
			<Fragment>
				{controls}
				<div className={'checkerboard-container ' + checkerboardAlign + ' ' + className}>
					{media}
					<div className='checkerboard-text'><InnerBlocks/></div>
				</div>
			</Fragment>

		);
	},

	save: function({attributes, className}) {
		const { checkerboardAlign, backgroundImage } = attributes;
		return (
			<div className={'checkerboard-container ' + checkerboardAlign + ' ' + className}>
				<div className='checkerboard-image' style={{background : 'url(' + backgroundImage + ')'}}></div>
				<div className='checkerboard-text'><InnerBlocks.Content /></div>
			</div>
		);
	},
} );
