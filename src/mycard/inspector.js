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
            styleClass,
            useColor,
            colorFontControl,
            colorBackgroundControl,
        },
        setAttributes
      } = this.props;

      return (
        <InspectorControls>
            <PanelBody>
                <SelectControl
                    label={ __("Button Style Settings") }
                    help={ __("Select Button Style Option") }
                    value={ styleClass }
                    options={[
                        { value: 'primary', label: __("Primary") },
                        { value: 'secondary', label: __("Secondary") },
                        { value: 'primary-border', label: __("Primary Border Only") },
                        { value: 'secondary-border', label: __("Secondary Border Only") },
                    ]}
                    onChange={ styleClass => setAttributes({ styleClass }) }
                />
            </PanelBody>

            <PanelBody>
                <ToggleControl
                    label={ __("Use Background Color?") }
                    help={ __( useColor ? 'Solid Color Background' : 'Transparent Background' ) }
                    checked={ useColor }
                    onChange={ () => setAttributes( { useColor: !useColor } ) }
                />
            </PanelBody>

            <PanelColorSettings
                title={__("Font Color")}
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

            { useColor &&
                <PanelColorSettings
                    title={__("Background Color")}
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
            }
        </InspectorControls>
      );
    }
}