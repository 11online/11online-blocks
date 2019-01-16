/**
 * Block dependencies
 */
import attributes from "./attributes";
import Container from "./container";

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
registerBlockType( 
    'eleven-online/container', 
    {
        title: __( 'Container Block' ),
        description: __( 'A \'container\' block can be used as a main container to hold any number of other inner blocks' ),
        category: 'common',
        icon: {
          background: '#F04848',
          foreground: '#FFFFFF',
          src: 'tablet',
        },                
        keywords: [
            __( '11 Online'),
            __( 'Background' ),
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
                    { <Container inEditor={ true } {...{ setAttributes, ...props }} /> }
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
                    { <Container inEditor={ false } {...{ setAttributes, ...props }} /> }
                </div>
            );
        },
    },
);