/**
 * Block dependencies
 */
import './style.scss';
import './editor.scss';

import attributes from "./attributes";
import Card from "./card";
import Edit from './edit';
// import Save from './save';

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element; 

/**
 * Register block
 */
registerBlockType( 
    'eleven-online/cards', 
    {
        title: __( 'Cards Block' ),
        description: __( 'A \'cards\' block allows a user to create a varied number of card-like posts with an optional image and link' ),
        category: 'common',
        icon: {
          background: '#F04848',
          foreground: '#FFFFFF',
          src: 'editor-table',
        },                
        keywords: [
            __( '11 Online'),
            __( 'Card' ),
            __( 'Eleven Online' ),
        ],
        // add support for the block alignment as a whole
        supports: {
            align: [ 'center', 'wide', 'full' ],
        },
        attributes,
        // Determines what is displayed in the editor
        edit: props => {
            const { setAttributes } = props;
            return (
                <Edit {...{ setAttributes, ...props }} />
            );
        },
        // Determines what is displayed on the frontend
        save: props => {
            const { 
                className,
                setAttributes,
            } = props;
    
            return (
                <div className={ className }>
                    { <Card editable={ false } {...{ setAttributes, ...props }} /> }
                </div>
            );
        },
    },
);