/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import classnames from 'classnames';
import Inspector from "./inspector";
import Controls from "./controls";
import attributes from "./attributes";

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
} = wp.editor;
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
        attributes,
        // Determines what is displayed in the editor
        edit: props => {
            // Deconstructing needed properties and methods from props
            const {
                attributes: { headline, message, text, url, textAlignment, highContrast },
                attributes,
                className,
                setAttributes
              } = props;
            const classes = classnames(
                className,
                { 'high-contrast': highContrast },
            );
            const toggleHighContrast = () => setAttributes( { highContrast: ! highContrast } );
            let settings = getSettings( attributes );

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
                        <div className="list" style={{ textAlign: textAlignment }}>
                            <ul>{settings}</ul>
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