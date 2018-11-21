/**
 * Block dependencies
 */
import icons from './icons';
import './style.scss';
import './editor.scss';

import classnames from 'classnames';

// Get custom components for this block


/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { 
    registerBlockType
} = wp.blocks;
const { 
    RichText, 
    UrlInput, 
    InspectorControls, 
    BlockControls,
} = wp.editor;
const {
    Toolbar,
    Button,
    Tooltip,
    PanelBody,
    PanelRow,
    FormToggle,
} = wp.components;
// const { Fragment } = wp.element;

/**
 * Register action block
 */
registerBlockType( 
    // block unique name (namespaced)
    'eleven-online/block-call-to-action', 
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
        // Enable or disable support for features
        supports: {
          html: false
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
            highContrast: {
                type: 'boolean',
                default: false,
            },
        },
        // Determines what is displayed in the editor
        edit: props => {
            // Deconstructing needed properties and methods from props
            const { attributes: { headline, message, text, url, highContrast }, 
            className, focus, setAttributes } = props;
            const toggleHighContrast = () => setAttributes( { highContrast: ! highContrast } );
            return (
                <InspectorControls>
                    <PanelBody
                        title={ __( 'High Contrast' ) }
                    >
                        <PanelRow>
                            <label
                                htmlFor="high-contrast-form-toggle"
                            >
                                { __( 'High Contrast' ) }
                            </label>
                            <FormToggle
                                id="high-contrast-form-toggle"
                                label={ __( 'High Contrast' ) }
                                checked={ highContrast }
                                onChange={ toggleHighContrast }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>,
                <BlockControls>
                    <Toolbar>
                        <Tooltip text={ __( 'High Contrast' )  }>
                            <Button
                                className={ classnames(
                                    'components-icon-button',
                                    'components-toolbar__control',
                                    { 'is-active': highContrast },
                                ) }
                                onClick={ toggleHighContrast }
                            >
                                {icons.contrast}
                            </Button>
                        </Tooltip>
                    </Toolbar>
                </BlockControls>,
                <div className={ classnames(className, { 'high-contrast': highContrast }, ) }>
                 <RichText
                        tagName="h3"
                        placeholder={ __( 'Add your custom heading' ) }
                  		onChange={ headline => setAttributes( { headline }) }
                  		value={ headline }
              		/>
                    <RichText
                        tagName="p"
                        placeholder={ __( 'Add your custom message' ) }
                        onChange={ message => setAttributes( { message }) }

                  		value={ message }
              		/>
                    <p>
                        <URLInput
                            className="button"
                            placeholder={ text }
                            value={ url }
                            onChange={ ( url ) => setAttributes( { url } ) }
                        />
                    </p>  
              </div>
            );
        },
        // Determines what is displayed on the frontend
        save: props => {
            const { attributes: { headline, message, text, url, highContrast }, className } = props;
            return (  
                <div className={ classnames(className, { 'high-contrast': highContrast }, ) }>
                    <div className="wrap">
                        <RichText.Content tagName="h3" value={ headline } />
                        <RichText.Content tagName="p" value={ message } /> 
                        <p>
                            <a className="button" href={ url }>{ text }</a>
                        </p>                   
                    </div>
                </div>                     
            );
        },
    },
);

