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
    'eleven-online/accordion', 
    {
        title: __( 'Accordion Block' ),
        description: __( 'A \'accordion\' block is collapsible/expandable on the front-end and consists of a title and some text underneath' ),
        category: 'common',
        icon: {
            background: '#DDA0DD',
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