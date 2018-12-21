/**
 * Block dependencies
 */
//import icons from './icons';
import Edit from './edit';
import Save from './save'
import attributes from "./attributes";

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register action block
 */
registerBlockType( 
    'eleven-online/mycard', 
    {
        title: __( 'Mycard Block' ),
        description: __( 'A \'card\' block allows a user to create a varied number of card-like posts with an optional image and link' ),
        category: 'common',
        icon: {
          background: '#104E8B',
          foreground: '#FFFFFF',
          src: 'editor-table',
        //   src: icons.columns,
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
            const { setAttributes } = props;
            return (
                <Save {...{ setAttributes, ...props }} />
            );
        },
    },
);