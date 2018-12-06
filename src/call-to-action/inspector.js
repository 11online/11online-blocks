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
            bgrOption,
            imgOpacity,
            colorFontControl,
            colorBackgroundControl,
        },
        setAttributes
      } = this.props;

      return (
        <InspectorControls>
            <PanelBody>
                <SelectControl
                    label={ __("Style Settings") }
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
                <SelectControl
                    label={ __("Background Settings") }
                    help={ __("Select Background Option") }
                    value={ bgrOption }
                    options={[
                        { value: "bgrImage", label: __("Background Image") },
                        { value: "bgrColor", label: __("Background Color") },
                        { value: "bgrNone", label: __("None") },
                    ]}
                    onChange={ bgrOption => setAttributes({ bgrOption }) }
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

            { bgrOption === 'bgrImage' &&
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
            }

            { bgrOption === 'bgrColor' &&
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