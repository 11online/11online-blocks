/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import classnames from 'classnames';
//import attributes from "./attributes";
import Inspector from "./inspector";
import Controls from "./controls";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element; 
const { 
    RichText, 
    URLInput,
} = wp.editor;
const {
    Tooltip,
    TextControl,
    Dropdown,
    ToggleControl,
} = wp.components;
const { Fragment } = wp.element; 

 /**
 * Create an Edit Component
 */
export default class Edit extends Component {

    constructor() {
        super( ...arguments );
    }

    render() {
    // Deconstructing needed properties and methods from props
        const {
            attributes: { 
                headline, 
                message, 
                text, 
                url, 
                textAlignment, 
                imgID, 
                imgURL, 
                imgOpacity,
                colorPaletteControl,
                newTab,
                styleClass,
            },
                attributes,
                className,
                setAttributes
            } = this.props;
        const classes1 = classnames(
            className,
            styleClass,
            'call-to-action'
        );
        const classes2 = classnames(
            className,
            styleClass,
            'button'
        );
        const toggleNewTab = () => setAttributes( { newTab: ! newTab } );

        const ButtonControls = (
			<div className='button-box'>
                <Fragment>
                    <Tooltip text={ __( 'Add or Edit Button Text' ) }>
                        <label>{ __( 'Button Text' ) }</label>
                    </Tooltip>
                    <TextControl
                        value={ text }
                        onChange={ text => setAttributes( { text } ) }
                    />
                    <Tooltip text={ __( 'Add or Edit Link URL' ) }>
                        <label>{ __( ' Link URL' ) }</label>
                    </Tooltip>
                    <URLInput
                        className="url"
                        value={ url }
                        onChange={ url => setAttributes( { url } ) }
                    />
                    <ToggleControl
                        label={ __("Open Link in New Tab?") }
                        help={ __( newTab ? 'Open Link in a New Tab' : 'Open Link in the Same Window' ) }
                        checked={ newTab }
                        onChange={ toggleNewTab }
                    />
                </Fragment>
			</div>
		);

        const renderButton = () => (
            <div style={ { width: '100%', float: textAlignment === 'center' ? 'none' : textAlignment } }>
                <Dropdown
                    // className="my-container-class-name"
                    contentClassName="my-popover-content"
                    position="top right"
                    renderToggle={ ( { isOpen, onToggle } ) => (
                        <p style={ { textAlign: textAlignment } }>
                            <Tooltip text={ __( 'Edit Link' ) }>
                                <a 
                                    className={ classes2 } 
                                    href={ url }
                                    onClick={ onToggle }
                                    aria-expanded={ isOpen }
                                >
                                    { text }
                                </a>
                            </Tooltip>
                        </p>  
                    ) }
                    renderContent={ () => ButtonControls }
                />
            </div>
        );

        return (
            <div className={ classes1 }>
                <Fragment>
                    <Inspector {...{ setAttributes, ...this.props }} />
                    <Controls {...{ setAttributes, ...this.props }} />
                    <RichText
                        tagName="h3"
                        placeholder={ __( 'Add your custom heading' ) }
                        value={ headline }
                        style={ { textAlign: textAlignment, color: colorPaletteControl } }
                        onChange={ headline => setAttributes( { headline } ) }                           
                    />
                    <RichText
                        tagName="p"
                        placeholder={ __( 'Add your custom message' ) }
                        value={ message }
                        style={ { textAlign: textAlignment, color: colorPaletteControl } }
                        onChange={ message => setAttributes( { message } ) }                 		
                    />
                    <Fragment>
                        <Tooltip text={ __( 'Click to add or edit Button Text and Link URL' ) }>
                            {renderButton()}
                        </Tooltip>
                    </Fragment>
                </Fragment>
                { ( imgID ) 
                    ?
                    <div 
                        className="img-background"
                        style={ { backgroundImage: 'url(' + imgURL + ')', opacity: imgOpacity*0.1 } }
                    ></div>
                    : ''
                }
            </div>
        );

    }
}