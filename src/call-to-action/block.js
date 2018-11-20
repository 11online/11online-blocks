/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import classnames from 'classnames';

// Get custom components for this block


/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, UrlInput } = wp.editor;
const { Fragment } = wp.element;

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
                type: 'string',
                source: 'text',
                selector: 'h3',
            },
            message: {
                type: 'array',
                source: 'children',
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
        }

            // content: {
            //     type: 'array',
            //     source: 'query',
            //     default: [],
            //     selector: '.block-call-to-action',
            //     query: {
            //         headline: {
            //             type: 'string',
            //             selector: 'h3',
            //             source: 'text',
            //           },
            //         description: {
            //             type: 'string',
            //             selector: 'p',
            //             source: 'text',      
            //     },
            //         link: {
            //             type: 'string',
            //             source: 'attribute',
            //             attribute: 'href',
            //         },
            //         buttonText: {
            //             type: 'string',
            //             source: 'text',
            //             selector: '.button',
            //     }
            // },
        },
        // Determines what is displayed in the editor
        edit: props => {
            // Deconstructing needed properties and methods from props
            const { attributes: { message, text, url }, className, isSelected, setAttributes } = props;
            const onChangeMessage = message => { setAttributes( { message } ) };
            // const onChangeContent = value => {
            //     props.setAttributes({ content: value });
            // };
            return (
                <div className={ className }>
                    <h3>{ headline }</h3>
                    <RichText
                        tagName="p"
                        placeholder={ __( 'Add your custom message' ) }
                  		onChange={ onChangeMessage }
                  		value={ message }
              		/>
                      <p>
                            <a className="button" href={ url }>
                                { text }
                            </a>
                        </p>            
                </div>
                // <div className={ props.className }>
                //     <div className='wrap'
                //         onChange={ onChangeContent }>
                //         <h3>{ content.query.headline.source.value }</h3>
                //         <p>{ content.query.description.source.value }</p>
                //         <p>
                //             <a
                //                 className="button"
                //                 href={ content.query.link.attribute.value }  
                //             >
                //                 { content.query.buttonText.source.value }
                //             </a>
                //         </p>
                //     </div>
                // </div>
            );
        },
        // Determines what is displayed on the frontend
        save: props => {
            const { attributes: { message} } = props;
            return (  
                <div className={ className }>
                    <div className="wrap">
                        <h3>'Call to Action'</h3>
                        { message }    
                        <p>
                            <a className="button" href={ url }>
                                { text }
                            </a>
                        </p>                   
                    </div>
                </div>            
                // <div className="wrap">
                //     <h3>{ content.query.headline.source.value }</h3>
                //     <p>{ content.query.description.source.value }</p>
                //     <p>
                //         <a
                //             className="button"
                //             href={ content.query.link.attribute.value }  
                //         >
                //             { content.query.buttonText.source.value }
                //         </a>
                //     </p>
                // </div>               
            );
        },
    },
);

