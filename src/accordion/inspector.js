/**
 * Used libraries
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const {
  InspectorControls,
  PanelColorSettings,
} = wp.editor;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
    constructor(props) {
        super( ...arguments );
        this.props = props;
    }
  
    render() {
      const {
        attributes: {
            titleHeadingSize,
            colorFontControl,
            useBackgroundColor,
            colorBackgroundControl,
        },
        setAttributes
      } = this.props;

      return (
        <InspectorControls>
            <PanelBody>
                <SelectControl
                    label={ __("Heading Font Size") }
                    help={ __("Select heading font size for your title") }
                    value={ titleHeadingSize }
                    options={[
                        { value: 'h2', label: __("h2") },
                        { value: 'h3', label: __("h3") },
                        { value: 'h4', label: __("h4") },
                    ]}
                    onChange={ titleHeadingSize => setAttributes( { titleHeadingSize } ) }
                />
            </PanelBody>
            <PanelBody>
                <ToggleControl
                    label={ __("Use Background Color?") }
                    help={ __( useBackgroundColor ? 'Solid color background' : 'White background' ) }
                    checked={ useBackgroundColor }
                    onChange={ () => setAttributes( { useBackgroundColor: !useBackgroundColor } ) }
                  />
            </PanelBody>

            <PanelColorSettings
                title={__("Font Color")}
                initialOpen={ false }
                colorSettings={[
                    {
                        label: __("Font Color"),
                        help: __("Select font color"),
                        value: colorFontControl,
                        onChange: colorFontControl => setAttributes( { colorFontControl  }),
                    }
                ]}
            />
            { useBackgroundColor &&
                <PanelColorSettings
                    title={__("Background Color")}
                    initialOpen={ false }
                    colorSettings={[
                        {
                            label: __("Background Color"),
                            help: __("Select background color"),
                            value: colorBackgroundControl,
                            onChange: colorBackgroundControl => setAttributes({ colorBackgroundControl }),
                        }
                    ]}
                />
            }
        </InspectorControls>
      );
    }
}