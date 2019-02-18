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
    'eleven-online/call-to-action-2', 
    {
        title: __( 'Call To Action 2 Block' ),
        description: __( 'A \'call to action 2\' block lets you create a content area with an optional background image or color, up to three optional action buttons with links, an optional logo with the adjustable size, and adjustable block paddings' ),
        category: 'common',
        icon: {
            background: '#DDA0DD',
            foreground: '#FFFFFF',
            src: 'megaphone'
        },                
        keywords: [
            __( '11 Online'),
            __( 'Call to Action 2' ),
            __( 'Eleven Online' ),
        ],
        // add support for the block alignment as a whole
        supports: {
            //align: true,
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