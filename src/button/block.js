//  Import CSS.
import './style.scss';
import './editor.scss';

import classnames from 'classnames';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { AlignmentToolbar, BlockControls, InspectorControls, RichText } = wp.editor;
const Fragment = wp.element.Fragment;
const SelectControl = wp.components.SelectControl;
const TextControl = wp.components.TextControl;
const Dropdown = wp.components.Dropdown;
const ToggleControl = wp.components.ToggleControl;

registerBlockType( 'eleven-online/block-button', {
	title: __( 'Button' ),
	icon: 'admin-links',
	category: 'common',
	keywords: [
		__( '11 Online' ),
		__( 'Button' ),
		__( 'Eleven Online' ),
	],
	attributes: {
		text: {
			type: 'string',
			default: 'Click here',
		},
		align: {
			type: 'string',
			default: 'left'
		},
		link: {
			type: 'string',
		},
		newTab: {
			type: 'boolean',
			default: false
		},
		extraClass: {
			type: 'string',
			default: 'primary'
		}
	},

	edit: function( {attributes, setAttributes, className, isSelected} ) {
		const { align, extraClass, text, link, newTab } = attributes;
		
		const controls = isSelected ? 
			<InspectorControls>
				<SelectControl
					label={ __( 'Style' ) }
					value={ extraClass }
					options={[
						{ value: 'primary', label: 'Primary'},
						{ value: 'secondary', label: 'Secondary'},
						{ value: 'primary', label: 'Primary Border Only'},
						{ value: 'secondary', label: 'Secondary Border Only'},
					]}
					onChange={ (value) => setAttributes( { extraClass: value } ) }
				/>
			</InspectorControls>
			: null;

		const ButtonControls = (
			<div className='button-box' style={{padding: '10px'}}>
				<TextControl
					label={ __( "Button Text:" ) }
					value={text}
					onChange={ value => { setAttributes( { text: value } ) } }
					placeholder={ __("Button Text") }
				/>
				<TextControl
					label={ __( "Link:" ) }
					value={link}
					onChange={ value => { setAttributes( { link: value } ) } }
					placeholder={ __("https://example.com") }
				/>
				<ToggleControl
					label={ __("Open in New Tab?") }
					checked={ !! newTab }
					onChange={ value => { setAttributes( { newTab: !newTab } ) } }
				/>
			</div>
		)

		const classes = classnames(className, extraClass, 'button')

		const renderButton = () => {
			return (
				<div style={{width: '100%', float: 'left'}}>
					<Dropdown
						renderToggle={ ( { isOpen, onToggle } ) => (
							<a className={classes}  onClick={ onToggle }>
								{ text }
							</a>
						) }
						renderContent={ () => ButtonControls }
					/>
				</div>
			)
		}
		
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
				<div style={{clear: 'both', overflow: 'auto', padding: 5}}>
					<div style={{textAlign: align, float: align === 'center' ? 'none' : align, position: 'relative'}}>
						{renderButton()}
					</div>
				</div>
			</Fragment>

		);
	},

	save: function({attributes, className}) {
		const { align, extraClass, text, link, newTab } = attributes;
		const classes = classnames(className, extraClass, 'button')
		return (
			<div style={{textAlign: align}}>
				<a className={classes} href={link} {...newTab ? {target: '_blank'} : null}>
					{ text }
				</a>
			</div>
		);
	},
} );
