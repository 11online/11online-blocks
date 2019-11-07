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
        super( ...arguments );
        this.props = props;
    }

    render() {
      const {
        attributes: {
            bgrOption,
            imgOpacity,
            colorBackgroundControl,
			useOverlay,
			colorOverlayControl,
			overlayOpacity,
            padTop,
            padBottom,
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
		const onChangeOverlayOptions= (value) => {
			setAttributes({ useOverlay: value });
		};






      return (
        <InspectorControls>
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

            { bgrOption === 'bgrImage' &&
                <PanelBody>
                    <RangeControl
                        beforeIcon="arrow-left-alt2"
                        afterIcon="arrow-right-alt2"
                        label={ __("Background Image Opacity" ) }
                        help={ __("Background image opacity on the scale from 1 to 10") }
                        value={ imgOpacity }
                        onChange={ imgOpacity => setAttributes( { imgOpacity } ) }
                        initialPosition={ 10 }
                        min={ 1 }
                        max={ 10 }
                    />
					<SelectControl
						label={ __("Use Overlay") }
						help={ __("Do you want to use an overlay on the background image?") }
						value={ useOverlay }
						options={[
							{ value: "yes", label: __("Yes") },
							{ value: "no", label: __("No") },
						]}
						onChange={ onChangeOverlayOptions }
					/>
					{ useOverlay === 'yes' &&
					<PanelBody>
						<PanelColorSettings
							title={__("Overlay Color")}
							initialOpen={ false }
							colorSettings={[
								{
									label: __("Overlay Color"),
									help: __("Select Overlay Color"),
									value: colorOverlayControl,
									onChange: colorOverlayControl => {
										setAttributes({ colorOverlayControl });
									},
								}
							]}
						/>
						<RangeControl
								beforeIcon="arrow-left-alt2"
								afterIcon="arrow-right-alt2"
								label={ __("Overlay Color Opacity" ) }
								help={ __("Overlay color opacity on the scale from 1 to 10") }
								value={  overlayOpacity }
								onChange={ overlayOpacity => setAttributes( { overlayOpacity } ) }
								initialPosition={ 75 }
								min={ 10 }
								max={ 100 }
						/>
					</PanelBody>

							}
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
            <PanelBody>
                    <RangeControl
                        beforeIcon="arrow-left-alt2"
                        afterIcon="arrow-right-alt2"
                        label={ __("Padding Top" ) }
                        help={ __("Top padding on the scale from 0 to 40 px") }
                        value={ padTop }
                        onChange={ padTop => setAttributes( { padTop } ) }
                        initialPosition={ 20 }
                        min={ 0 }
                        max={ 100 }
                    />
                    <RangeControl
                       beforeIcon="arrow-left-alt2"
                       afterIcon="arrow-right-alt2"
                       label={ __("Padding Bottom" ) }
                       help={ __("Bottom padding on the scale from 0 to 40 px") }
                       value={ padBottom }
                       onChange={ padBottom => setAttributes( { padBottom } ) }
                       initialPosition={ 20 }
                       min={ 0 }
                       max={ 100 }
                    />
            </PanelBody>
        </InspectorControls>
      );
    }
}
