//  Import CSS.
import './style.scss';
import './editor.scss';

import classnames from 'classnames';

// Get custom components for this block

// Get just the __() localization function from wp.i18n
const { __ } = wp.i18n;

// Get components from from wp.blocks
const { registerBlockType } = wp.blocks;

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
          src: 'dashicons-megaphone'
        },                
        // Limit to 3 Keywords / Phrases
        keywords: [
            __( '', '' ),
            __( '', '' ),
            __( '', '' ),
        ],
        // Enable or disable support for features
        supports: {
          html: false
        },
        // Set for each piece of dynamic data used in your block
        attributes: {
            setting: {
                type: '',
                default: '',
            },
            content: {
                type: 'array',
                source: 'children',
                selector: 'div.call-to-action-container',
            },
        },
        // Determines what is displayed in the editor
        edit: props => {},
        // Determines what is displayed on the frontend
        save: props => {},
    },
    );

