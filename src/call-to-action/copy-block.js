/**
 * Block dependencies
 */
import icons from './icons';
import './style.scss';
import './editor.scss';

import classnames from 'classnames';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { 
    registerBlockType
} = wp.blocks;
const { 
    RichText, 
    URLInput,
    AlignmentToolbar,
    //InspectorControls, 
    BlockControls,
} = wp.editor;
const {
    Toolbar,
    Button,
    Tooltip,
    //PanelBody,
    //PanelRow,
    //FormToggle,
} = wp.components;
const { Fragment } = wp.element;

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
        // Customize background color
        icon: {
          background: '#F04848',
          src: 'megaphone'
        },                
        // Limit to 3 Keywords / Phrases
        keywords: [
            __( '11 Online'),
            __( 'Call to Action' ),
            __( 'Eleven Online' ),
        ],
        // add support for wide and full block alignment
        supports: {
            align: true
        },
        // Set for each piece of dynamic data used in your block
        attributes: {
            headline: {
                source: 'html',
                selector: 'h3',
            },
            message: {
                source: 'html',
                selector: 'p',
            },
            text: {
                type: 'string',
                source: 'text',
                selector: 'a',
            },
            url: {
                type: 'string',
                source: 'attribute',
                attribute: 'href',
                selector: 'a',               
            },
            textAlignment: {
                type: 'string',
            },
            highContrast: {
                type: 'boolean',
                default: false,
            },
        },
        // Determines what is displayed in the editor
        edit: props => {
            // Deconstructing needed properties and methods from props
            const { attributes: { headline, message, text, url, textAlignment, highContrast },
                className, setAttributes } = props;
            const classes = classnames(
                className,
                { 'high-contrast': highContrast },
            );
            //const toggleHighContrast = () => setAttributes( { highContrast: ! highContrast } );
            return (
                <div className={ classes } >
                    <Fragment>
                        <BlockControls>
                            <AlignmentToolbar
                                value={ textAlignment }
                                onChange={ textAlignment => setAttributes( { textAlignment } ) }
                            />
                            <Toolbar>
                                <Tooltip text={ __( 'High Contrast' ) }>
                                    <Button
                                        className={ classnames(
                                            'components-icon-button',
                                            'components-toolbar__control',
                                        { 'is-active': highContrast },
                                    ) }
                                        onClick={ () => setAttributes( { highContrast: ! highContrast } ) }
                                    >
                                        { icons.contrast }
                                    </Button>
                                </Tooltip>
                            </Toolbar>
                        </BlockControls>
                        <RichText
                            tagName="h3"
                            className={ classnames(
                                { 'high-contrast': highContrast }
                            ) }
                            placeholder={ __( 'Add your custom heading' ) }
                            value={ headline }
                            style={ { textAlign: textAlignment } }
                            onChange={ headline => setAttributes( { headline }) }
                            
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
                        <p>
                            <URLInput
                                className="button"
                                placeholder={ text }
                                value={ url }
                                onChange={ ( url ) => setAttributes( { url } ) }
                            />
                        </p> 



                        <div>
                            { ! imgID ? (
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ onSelectImage }
                                        //onSelect={ ( media ) => console.log( 'selected ' + media.length ) }
                                        type="image"
                                        value={ imgID }
                                        render={ ( { open } ) => (
                                            <Button
                                                className={ "components-button button button-large" }
                                                onClick={ open }
                                            >
                                                {/* { icons.upload } */}
                                                { __( ' Upload Image' ) }
                                            </Button>
                                        ) }
                                    >
                                    </MediaUpload>
                                </MediaUploadCheck>
                            ) : (
                                <p class="image-wrapper">
                                    <img
                                        src={ imgURL }
                                        alt={ imgAlt }
                                    />
                                    <Button
                                        className="remove-image"
                                        onClick={ onRemoveImage }
                                    >
                                        { icons.remove }
                                    </Button>
                                </p>
                            )}
                        </div>
                    </Fragment> 
                </div>
            );
        },
        // Determines what is displayed on the frontend
        save: props => {
            const { attributes: { headline, message, text, url, textAlignment, highContrast }, className } = props;
            // const classes = classnames(
            //     className,
            //     { 'high-contrast': highContrast },
            // );
            const classes = (highContrast ? 'call-to-action high-contrast': 'call-to-action' );
            return (  
                <div className={ classes }>
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
                                href={ url }>{ text }
                            </a>
                        </p>                   
                    </div>
                </div>                     
            );
        },
    },
);