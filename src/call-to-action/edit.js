/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import classnames from 'classnames';
import Inspector from "./inspector";
import Controls from "./controls";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element; 
const { 
    RichText, 
} = wp.editor;
const {
    Tooltip,
    TextControl,
    Button,
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
            <Fragment>
                <TextControl
                    label={ __( 'Button Text' ) }
                    value={ text }
                    onChange={ text => setAttributes( { text } ) }
                />
                <TextControl
                    label={ __( 'Link URL' ) }
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
		);

        const renderButton = () => (
            <div style={ { width: '100%', float: textAlignment === 'center' ? 'none' : textAlignment } }>
                <Dropdown
                    className="my-popover-container"
                    contentClassName="my-popover-content"
                    // position="top left"
                    renderToggle={ ( { isOpen, onToggle } ) => (
                        <div style={ { textAlign: textAlignment, color: colorPaletteControl } }>
                            <a 
                                className="button" 
                                href="#0"
                                onClick={ onToggle } 
                                aria-expanded={ isOpen }
                            >
                                { text }
                            </a>
                        </div>       
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