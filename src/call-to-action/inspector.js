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
  PanelRow,
  RadioControl,
  ToggleControl,
  SelectControl
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
          radioControl,
          toggleControl,
          selectControl
        },
        setAttributes
      } = this.props;

      return (
        <InspectorControls>
            <PanelBody>
                <RadioControl
                    label={ __( "Template Control" ) }
                    selected={ radioControl }
                    options={[
                    { label: "Primary Option", value: "a" },
                    { label: "Secondary Option", value: "b" },
                    ]}
                    onChange={radioControl => setAttributes({ radioControl })}
                />
            </PanelBody>
            <PanelBody title={ __( 'High Contrast' ) }>
                    <PanelRow>
                        <label htmlFor="high-contrast-form-toggle">
                            { __( 'High Contrast' ) }
                         </label>
                        <FormToggle 
                            id="high-contrast-form-toggle"
                            label={ __( 'High Contrast' ) }
                            checked={ highContrast }
                            onChange={ toggleHighContrast }
                        />
                    </PanelRow>
            </PanelBody>
            <PanelBody>
                <ToggleControl
                    label={ __( "Toggle Control" ) }
                    checked={ toggleControl }
                    onChange={ toggleControl => setAttributes( { toggleControl } ) }
                />
            </PanelBody>
            <PanelBody>
                <SelectControl
                    label={ __( "Select Control" ) }
                    value={ selectControl }
                    options={[
                    { value: "a", label: __( "Option A" ) },
                    { value: "b", label: __( "Option B" ) },
                    { value: "c", label: __( "Option C" ) }
                    ]}
                    onChange={selectControl => setAttributes({ selectControl })}
                />
        </PanelBody> 
        </InspectorControls>
      );
    }
}