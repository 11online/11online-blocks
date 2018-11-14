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
		align: {
			type: 'string',
			default: 'right'
		},
		backgroundImage: {
			type: 'string'
		}
	},

	edit: function( {attributes, setAttributes, className, isSelected} ) {
		const { align, backgroundImage } = attributes;
		
		const controls = isSelected ? 
			<InspectorControls>
				<SelectControl
					label={ __( 'Left or Right' ) }
					value={ align }
					options={[
						{ value: 'left', label: 'Left'},
						{ value: 'right', label: 'Right'}
					]}
					onChange={ (value) => setAttributes( { align: value } ) }
				/>
			</InspectorControls>
			: null;

		const media = isSelected ?
			<MediaUpload
				onSelect={media => setAttributes({backgroundImage: media.url})}
				render={ ( { open } ) => (
					<Button onClick={ open }>
						Open Media Library
					</Button>
				) }
			/>
			: <div className='checkerboard-image' style={{background : 'url(' + backgroundImage + ')'}}></div>;

		return (
			<Fragment>
				{controls}
				<div className={'checkerboard-container ' + align + ' ' + className}>
					{ align === 'right' 
						?
							[
								media,
								<div className='checkerboard-text'><InnerBlocks/></div>
							]
						:
							[
								<div className='checkerboard-text'><InnerBlocks/></div>,
								media
							]
					}
				</div>
			</Fragment>

		);
	},

	save: function({attributes, className}) {
		const { align, backgroundImage } = attributes;
		return (
			<div className={'checkerboard-container ' + align + ' ' + className}>
				{ align === 'right' 
					?
						[
							<div className='checkerboard-image' style={{background : 'url(' + backgroundImage + ')'}}></div>,
							<div className='checkerboard-text'><InnerBlocks.Content /></div>
						]
					:
						[
							<div className='checkerboard-text'><InnerBlocks.Content /></div>,
							<div className='checkerboard-image' style={{background : 'url(' + backgroundImage + ')'}}></div>
						]
				}
			</div>
		);
	},
} );
