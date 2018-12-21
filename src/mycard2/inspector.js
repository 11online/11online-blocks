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
  SelectControl,
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
            styleClass,
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
                      { value: 'card-primary', label: __("Primary") },
                      { value: 'card-secondary', label: __("Secondary") },
                      { value: 'card-primary-border', label: __("Primary Border Only") },
                      { value: 'card-secondary-border', label: __("Secondary Border Only") },
                  ]}
                  onChange={ styleClass => setAttributes({ styleClass }) }
              />
          </PanelBody>
        </InspectorControls>
      );
    }
}