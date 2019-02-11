/**
 * Block dependencies
 */
import attributes from "./attributes";
import Postcard from "./postcard";

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
registerBlockType( 
    'eleven-online/postcard', 
    {
        title: __( 'Postcard Block' ),
        description: __( 'A \'postcard\' block is collapsible/expandable on the front-end and consists of a title, a large postcard-like image, and some text underneath' ),
        category: 'common',
        icon: {
          background: '#F04848',
          foreground: '#FFFFFF',
          src: 'format-image',
        },                
        keywords: [
            __( '11 Online'),
            __( 'Postcard' ),
            __( 'Eleven Online' ),
        ],
        // add support for the block alignment as a whole
        supports: {
            align: [ 'center', 'wide', 'full' ],
        },
        attributes,
        // Determines what is displayed in the editor
        edit: props => {
            const { 
                className,
                setAttributes,
            } = props;
    
            return (
                <div className={ className }>
                    { <Postcard inEditor={ true } {...{ setAttributes, ...props }} /> }
                </div>
            );
        },
        save: props => {
            const { 
                className,
                setAttributes,
            } = props;
    
            return (
                <div className={ className }>
                    { <Postcard inEditor={ false } {...{ setAttributes, ...props }} /> }
                </div>
            );
        },
    },
);