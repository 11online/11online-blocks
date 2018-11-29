/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import classnames from 'classnames';
import Inspector from "./inspector";
import Controls from "./controls";
import attributes from "./attributes";
import icons from './icons';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { 
    registerBlockType,   
} = wp.blocks;
// To make sure the current user has Upload permissions, 
// we need to wrap the MediaUpload component into the MediaUploadCheck one.
const { 
    RichText, 
    URLInput,
} = wp.editor;
const {
    Button,
    IconButton,
    Tooltip,
    TextControl,
} = wp.components;
const { Fragment } = wp.element;

function getSettings(attributes) {
    let settings = [];
    for (let attribute in attributes) {
      let value = attributes[attribute];
      if ("boolean" === typeof attributes[attribute]) {
        value = value.toString();
      }
      settings.push(
        <li>
          {attribute}: {value}
        </li>
      );
    }
    return settings;
  }
  

/**
 * Register action block
 */
registerBlockType( 
    // block unique name (namespaced)
    'eleven-online/call-to-action', 
    {
        // Localize title using wp.i18n.__()
        title: __( 'Call To Action Block' ),
        // Add a description for the block
        description: __( 'A \'call to action\' block prompts a user to visit a specified link by clicking a button' ),
        category: 'common',
        // Dashicons Options - https://goo.gl/aTM1DQ
        // Customize background & foreground color
        icon: {
          background: '#F04848',
          foreground: '#FFFFFF',
          src: 'megaphone'
        },                
        // Limit to 3 Keywords / Phrases
        keywords: [
            __( '11 Online'),
            __( 'Call to Action' ),
            __( 'Eleven Online' ),
        ],
        // add support for the block alignment as a whole
        supports: {
            align: true,
            //align: [ 'left', 'center', 'right', 'full' ],
        },
        // Set for each piece of dynamic data used in your block
        attributes,
        // Determines what is displayed in the editor
        edit: props => {
            // Deconstructing needed properties and methods from props
            const {
                attributes: { headline, 
                    message, 
                    text, 
                    url, 
                    textAlignment, 
                    highContrast,
                    imgID, 
                    imgURL, 
                    imgAlt,
                 },
                attributes,
                className,
                isSelected,
                setAttributes
              } = props;
            const classes = classnames(
                className,
                { 'high-contrast': highContrast },
            );
            const toggleHighContrast = () => setAttributes( { highContrast: ! highContrast } );
            let settings = getSettings( attributes );
            const onSelectImage = img => {
                setAttributes( {
                    imgID: img.id,
                    imgURL: img.url,
                    imgAlt: img.alt,
                } );
            };
            const onRemoveImage = () => {
                setAttributes({
                    imgID: null,
                    imgURL: null,
                    imgAlt: null,
                } );
            };

            return (
                <div className={ classes } >
                    <Fragment>
                        <Inspector {...{ setAttributes, ...props }} />
                        <Controls {...{ setAttributes, ...props }} />
                        <RichText
                            tagName="h3"
                            className={ classnames(
                                { 'high-contrast': highContrast }
                            ) }
                            placeholder={ __( 'Add your custom heading' ) }
                            value={ headline }
                            style={ { textAlign: textAlignment } }
                            onChange={ headline => setAttributes( { headline } ) }                           
                        />
                        <RichText
                            tagName="p"
                            className={ classnames(
                                { 'high-contrast': highContrast }
                            ) }
                            placeholder={ __( 'Add your custom message' ) }
                            value={ message }
                            style={ { textAlign: textAlignment } }
                            onChange={ message => setAttributes( { message } ) }                 		
                        />
                        { isSelected ? (
                        <Fragment>
                            <Tooltip text={ __( 'Add or Edit Link Text' ) }>
                                <label>{ __( 'Link Text' ) }</label>
                            </Tooltip>
                            <TextControl
                                id="link-text-input-field"
                                value={ text }
                                onChange={ text => setAttributes( { text } ) }
                            />
                            <form
                                className="blocks-format-toolbar__link-modal-line"
                                onSubmit={ event => event.preventDefault() }
                            >
                                <Tooltip text={ __( 'Add or Edit Link URL' ) }>
                                    { icons.url }
                                </Tooltip>
                                <label>{ __( ' Link URL' ) }</label>
                                <URLInput
                                    className="url"
                                    value={ url }
                                    onChange={ url => setAttributes( { url } ) }
                                />
                            </form>
                        </Fragment>
                    ) : (
                        <p>
                            <Tooltip text={ __( 'Edit Link' ) }>
                                <a href={ url }>
                                    { text || __( 'Edit link' ) }
                                </a>
                            </Tooltip>
                        </p>
                    )}
                        { imgID ? (
                            <p class="image-wrapper">
                                <img
                                    src={ imgURL }
                                    alt={ imgAlt }
                                />
                            </p>
                        ) : '' }
                        <div className="list" style={{ textAlign: textAlignment }}>
                            <ul>{settings}</ul>
                        </div>                
                    </Fragment> 
                </div>
            );
        },
        // Determines what is displayed on the frontend
        save: props => {
            const { headline, 
                    message, 
                    text, 
                    url, 
                    textAlignment,
                    imgID,
                    imgURL, 
                    imgOpacity
                } = props.attributes;

            const classes = (imgID ? 'call-to-action img-background': 'call-to-action' );
            const bgr = (imgID ?  'url(' + imgURL + ')' : 'none');

            return (  
                <div 
                    className={ classes }
                    style={ { backgroundImage: bgr, opacity: (imgOpacity*0.1) } }
                >
                    <div class="wrap" style={ { textAlign: textAlignment } }>
                        <RichText.Content 
                            tagName="h3" 
                            value={ headline } 
                        />
                        <RichText.Content 
                            tagName="p" 
                            value={ message } 
                        /> 
                        <p>
                            <a 
                                className="button" 
                                href={ url }
                            >
                                { text }
                            </a>
                        </p>             
                    </div>
                </div>                     
            );
        },
    },
);