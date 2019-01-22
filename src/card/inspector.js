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
            CardBtnStyleClass,
            useColor,
            colorFontControl,
            colorBackgroundControl,
            cardBtnPresent,
            cardHeadingSize,
        },
        setAttributes
      } = this.props;

      return (
        <InspectorControls>
            <PanelBody>
                <SelectControl
                    label={ __("Heading Font Size") }
                    help={ __("Select heading font size for your title") }
                    value={ cardHeadingSize }
                    options={[
                        { value: 'h2', label: __("h2") },
                        { value: 'h3', label: __("h3") },
                        { value: 'h4', label: __("h4") },
                    ]}
                    onChange={ cardHeadingSize => setAttributes({ cardHeadingSize }) }
                />
            </PanelBody>

            { cardBtnPresent &&
                <PanelBody>
                    <SelectControl
                        label={ __("Button Style Settings") }
                        help={ __("Select button style option") }
                        value={ CardBtnStyleClass }
                        options={[
                            { value: 'primary', label: __("Primary") },
                            { value: 'secondary', label: __("Secondary") },
                            { value: 'primary-border', label: __("Primary Border Only") },
                            { value: 'secondary-border', label: __("Secondary Border Only") },
                        ]}
                        onChange={ CardBtnStyleClass => setAttributes({ CardBtnStyleClass }) }
                    />
                </PanelBody>
            }

            <PanelBody>
                <ToggleControl
                    label={ __("Use Background Color?") }
                    help={ __( useColor ? 'Solid color background' : 'Transparent background' ) }
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
                        help: __("Select font color"),
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
                            help: __("Select background color"),
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