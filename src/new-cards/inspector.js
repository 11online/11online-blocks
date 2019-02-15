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
    RangeControl,
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
              
              { cards[currentCard].imgID &&
                <PanelBody>
                    <RangeControl
                        beforeIcon="arrow-left-alt2"
                        afterIcon="arrow-right-alt2"
                        label={ __("Background Image Opacity") }
                        help={ __("Background image opacity on the scale from 1 to 10") }
                        value={ cards[currentCard].imgOpacity }
                        onChange={ imgOpacity => {
                            const newCards = [...cards];
                            newCards[currentCard].imgOpacity = imgOpacity;
                            setAttributes({ cards: newCards });
                        } }      
                        initialPosition={ 10 }
                        min={ 1 }
                        max={ 10 }
                    />
                </PanelBody>
            }

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
        </InspectorControls>
      );
    }
}