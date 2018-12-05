/**
 * Internal block libraries
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  InspectorControls,
  PanelColorSettings,
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
            styleClass,
            imgOpacity,
            newTab,
            colorFontControl,
            colorBackgroundControl,
        },
        setAttributes
      } = this.props;

      const toggleNewTab = () => setAttributes( { newTab: ! newTab } );

      return (
        <InspectorControls>
            <PanelBody>
                <SelectControl
                    label={ __("Style Option Control") }
                    help={ __("Select Style Option") }
                    value={ styleClass }
                    options={[
                        { value: "Primary", label: __("Primary Option") },
                        { value: "Secondary", label: __("Secondary Option") },
                    ]}
                    onChange={ styleClass => setAttributes({ styleClass }) }
                />
            </PanelBody>

            <PanelBody>
                <ToggleControl
                    label={ __("Use Background Image?") }
                    help={ __( bgrImg ? 'Use Background Image' : 'Use Background Color' ) }
                    checked={ bgrImg }
                    onChange={ toggleBgrImg }
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

            <PanelColorSettings
                title={__("Font Color Settings")}
                initialOpen={ false }
                colorSettings={[
                    {
                        label: __("Font Color"),
                        help: __("Select Font Color"),
                        value: colorFontControl,
                        onChange: colorFontControl => {
                            setAttributes({ colorFontControl });
                        },
                    }
                ]}
            />

            <PanelColorSettings
                title={__("Background Color Settings")}
                initialOpen={ false }
                colorSettings={[
                    {
                        label: __("Background Color"),
                        help: __("Select Background Color"),
                        value: colorBackgroundControl,
                        onChange: colorBackgroundControl => {
                            setAttributes({ colorBackgroundControl });
                        },
                    }
                ]}
            />
        </InspectorControls>
      );
    }
}