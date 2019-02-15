/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import attributes from "./attributes";
import Cards from "./cards";

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
registerBlockType( 
    'eleven-online/new-cards', 
    {
        title: __( 'New Cards Block' ),
        description: __( 'A \'cards\' block allows a user to create a varied number of card-like elements with an optional background image and link in each' ),
        category: 'common',
        icon: {
            background: '#DDA0DD',
            foreground: '#FFFFFF',
            src: 'editor-table',
        },                
        keywords: [
            __( '11 Online'),
            __( 'New Cards' ),
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
                    { <Cards inEditor={ true } {...{ setAttributes, ...props }} /> }
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
                    { <Cards inEditor={ false } {...{ setAttributes, ...props }} /> }
                </div>
            );
        },
    },
);