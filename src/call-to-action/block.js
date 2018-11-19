//  Import CSS.
import './style.scss';
import './editor.scss';

import classnames from 'classnames';

// Get custom components for this block

// Get just the __() localization function from wp.i18n
const { __ } = wp.i18n;

// Get components from from wp.blocks
const { registerBlockType } = wp.blocks;

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
            content: {
                type: 'array',
                source: 'query',
                default: [],
                selector: 'div .call-to-action-container',
                query: {
                    headline: {
                        type: 'string',
                        selector: 'h3',
                        source: 'text',
                      },
                    description: {
                        type: 'string',
                        selector: 'p',
                        source: 'text',      
                },
                    link: {
                        type: 'string',
                        source: 'attribute',
                        attribute: 'href',
                    },
                    buttonText: {
                        type: 'string',
                        source: 'text',
                        selector: '.button',
                }
            },
        },
        // Determines what is displayed in the editor
        edit: props => {
            // Deconstructing needed properties and methods from props
            const { attributes: { content }, className, setAttributes } = props;
            const onChangeContent = value => {
                props.setAttributes({ content: value });
            };
            return (
                <div className={ props.className }>
                    <div className='wrap'
                        onChange={ onChangeContent }>
                        <h3>{ content.query.headline.source.value }</h3>
                        <p>{ content.query.description.source.value }</p>
                        <p>
                            <a
                                className="button"
                                href={ content.query.link.attribute.value }  
                            >
                                { content.query.buttonText.source.value }
                            </a>
                        </p>
                    </div>
                </div>
            );
        },
        // Determines what is displayed on the frontend
        save: props => {},
    },
    );

