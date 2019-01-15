/**
 * Block dependencies
 */
//import './style.scss';
//import './editor.scss';

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
    'eleven-online/background', 
    {
        title: __( 'Background Block' ),
        description: __( 'A \'background\' block can be used as a container for the inner blocks' ),
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
                    {/* <p>I am in the editor</p> */}
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
                    {/* <p>I am in the browser</p> */}
                </div>
            );
        },
    },
);