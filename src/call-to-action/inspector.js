/**
 * Internal block libraries
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  InspectorControls,
} = wp.editor;
const {
  PanelBody,
  ToggleControl,
  SelectControl,
  RangeControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
    constructor() {
      super(...arguments);
    }
  
    render() {
      const {
        attributes: {
          selectControl,
          imgOpacity,
          newTab,
        },
        setAttributes
      } = this.props;

      const toggleNewTab = () => setAttributes( { newTab: ! newTab } );

      return (
        <InspectorControls>
            <PanelBody>
                <ToggleControl
                    label={ __( "Open Link in New Tab?" ) }
                    help={ __( newTab ? 'Open Link in a New Tab' : 'Open Link in the Same Window' ) }
                    checked={ newTab }
                    onChange={ toggleNewTab }
                />
            </PanelBody>

            <PanelBody>
                <RangeControl
                    beforeIcon="arrow-left-alt2"
                    afterIcon="arrow-right-alt2"
                    label={ __("Background Image Opacity" ) }
                    help={ __("Use the slider to change the background image opacity on the scale from 1 to 10") }
                    value={ imgOpacity }
                    onChange={ imgOpacity => setAttributes( { imgOpacity } ) }
                    initialPosition={ 10 }
                    min={ 1 }
                    max={ 10 }
                />
            </PanelBody>

            <PanelBody>
                <SelectControl
                    label={ __( "Select Control" ) }
                    value={ selectControl }
                    options={[
                        { value: "Primary", label: __( "Primary Option" ) },
                        { value: "Secondary", label: __( "Secondary Option" ) },
                    ]}
                    onChange={ selectControl => setAttributes({ selectControl }) }
                />
        </PanelBody> 
        </InspectorControls>
      );
    }
}