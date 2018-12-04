/**
 * Block dependencies
 */
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
    'eleven-online/call-to-action', 
    {
        title: __( 'Call To Action Block' ),
        description: __( 'A \'call to action\' block prompts a user to visit a specified link by clicking a button' ),
        category: 'common',
        icon: {
          background: '#F04848',
          foreground: '#FFFFFF',
          src: 'megaphone'
        },                
        keywords: [
            __( '11 Online'),
            __( 'Call to Action' ),
            __( 'Eleven Online' ),
        ],
        // add support for the block alignment as a whole
        supports: {
            //align: true,
            align: [ 'left', 'center', 'right', 'wide' ],
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