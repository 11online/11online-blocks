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
  RangeControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
    constructor(props) {
        super(...arguments);
        this.props = props;
    }

  
    render() {
      const {
          attributes: {
            headingSize,
            buttons,
            buttonStyleClass,
            bgrOption,
            imgOpacity,
            colorFontControl,
            colorBackgroundControl,
        },
        setAttributes
      } = this.props;

        const onChangeBgrOption = (value) => {
            if (value === 'bgrImage' || value === 'bgrNone') {
                setAttributes({
                    colorBackgroundControl: 'transparent'
                });
            }

            if (value === 'bgrColor' || value === 'bgrNone') {
                setAttributes({
                    imgID: null,
                    imgURL: null,
                } );
            }

            setAttributes({ bgrOption: value });
        };

      return (
          <InspectorControls>   
            <PanelBody>
                <SelectControl
                    label={ __("Heading Font Size") }
                    help={ __("Select heading font size for your title") }
                    value={ headingSize }
                    options={ [
                        { value: 'h2', label: __("h2") },
                        { value: 'h3', label: __("h3") },
                        { value: 'h4', label: __("h4") },
                    ] }
                    onChange={ headingSize => setAttributes({ headingSize }) }
                />
            </PanelBody>
              
            { buttons.length && 
                <PanelBody>
                    <SelectControl
                        label={ __("Button Style Settings") }
                        help={ __("Select Button Style Option") }
                        value={ buttonStyleClass }
                        options={[
                            { value: 'primary', label: __("Primary") },
                            { value: 'secondary', label: __("Secondary") },
                            { value: 'primary-border', label: __("Primary Border Only") },
                            { value: 'secondary-border', label: __("Secondary Border Only") },
                        ]}
                      onChange={buttonStyleClass => { setAttributes({ buttonStyleClass }); }}
                    /> 
                </PanelBody>
            }
              
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
                    onChange={ onChangeBgrOption }
                />
            </PanelBody>

            <PanelColorSettings
                title={ __("Font Color") }
                initialOpen={ false }
                colorSettings={ [
                    {
                        label: __("Font Color"),
                        help: __("Select Font Color"),
                        value: colorFontControl,
                        onChange: colorFontControl => {
                            setAttributes({ colorFontControl });
                        },
                    }
                ] }
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