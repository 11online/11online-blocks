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
    'eleven-online/block-action', 
    {
        // Localize title using wp.i18n.__()
        title: __( '', '' ),
        // Add a description for the block
        description: __( '', '' ),
        // Category Options: common, formatting, layout, widgets, embed
        category: 'common',
        // Dashicons Options - https://goo.gl/aTM1DQ
        // Customize background color
        icon: {
          background: '',
          src: ''
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
            }
        },
        // Determines what is displayed in the editor
        edit: props => {},
        // Determines what is displayed on the frontend
        save: props => {},
    },
    );

