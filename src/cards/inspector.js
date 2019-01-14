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
            currentCard,
            cards,
        },
        setAttributes
      } = this.props;

      return (
        <InspectorControls>
            <PanelBody>
                <SelectControl
                    label={ __("Heading Font Size") }
                    help={ __("Select heading font size for your title") }
                    value={ cards[currentCard].cardHeadingSize }
                    options={[
                        { value: 'h2', label: __("h2") },
                        { value: 'h3', label: __("h3") },
                        { value: 'h4', label: __("h4") },
                    ]}
                    onChange={ cardHeadingSize => {
                        const newCards = [ ...cards];
                        newCards[currentCard].cardHeadingSize = cardHeadingSize;
                        setAttributes( { cards: newCards } );
                    } }
                />
            </PanelBody>

            { cards[currentCard].cardBtnPresent &&
                <PanelBody>
                    <SelectControl
                        label={ __("Button Style Settings") }
                        help={ __("Select button style option") }
                        value={ cards[currentCard].CardBtnStyleClass }
                        options={[
                            { value: 'primary', label: __("Primary") },
                            { value: 'secondary', label: __("Secondary") },
                            { value: 'primary-border', label: __("Primary Border Only") },
                            { value: 'secondary-border', label: __("Secondary Border Only") },
                        ]}
                        onChange={ CardBtnStyleClass => {
                            const newCards = [ ...cards];
                            newCards[currentCard].CardBtnStyleClass = CardBtnStyleClass;
                            setAttributes( { cards: newCards } );
                       } }      
                    />
                </PanelBody>
            }

            <PanelBody>
                <ToggleControl
                    label={ __("Use Background Color?") }
                    help={ __( cards[currentCard].useColor ? 'Solid color background' : 'White background' ) }
                    checked={ cards[currentCard].useColor }
                    onChange={ () => {
                        const newCards = [ ...cards];
                        newCards[currentCard].useColor = !newCards[currentCard].useColor;
                        setAttributes( { cards: newCards } );
                    } }                      
                  />
            </PanelBody>

            <PanelColorSettings
                title={__("Font Color")}
                initialOpen={ false }
                colorSettings={[
                    {
                        label: __("Font Color"),
                        help: __("Select font color"),
                        value: cards[currentCard].colorFontControl,
                        onChange: colorFontControl => {
                            const newCards = [ ...cards];
                            newCards[currentCard].colorFontControl = colorFontControl;
                            setAttributes( { cards: newCards } );
                        },
                    }
                ]}
            />

            { cards[currentCard].useColor &&
                <PanelColorSettings
                    title={__("Background Color")}
                    initialOpen={ false }
                    colorSettings={[
                        {
                            label: __("Background Color"),
                            help: __("Select background color"),
                            value: cards[currentCard].colorBackgroundControl,
                            onChange: colorBackgroundControl => {
                                const newCards = [ ...cards];
                                newCards[currentCard].colorBackgroundControl = colorBackgroundControl;
                                setAttributes( { cards: newCards } );
                            },
                        }
                    ]}
                />
            }
        </InspectorControls>
      );
    }
}