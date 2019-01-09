/**
 * InnerButton Component dependencies
 */
import classnames from 'classnames';

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    TextControl,
    Dropdown,
    ToggleControl,
} = wp.components;

/**
 * Create an Inner Button Component
 */
export default class InnerButton extends Component {

    constructor(props) {
        super( ...arguments );
        this.props = props;
    }

    render() {
        const {
            attributes: { 
                buttonText,
                buttonURL,
                buttonStyleClass,
                newTab,
             },
            setAttributes
          } = this.props;

          const classes = classnames(
            buttonStyleClass,
            'button'
        );

          const ButtonControls = (
            <div className='button-box'>
                <TextControl
                    label={ __( 'Button Text' ) }
                    value={ buttonText }
                    onChange={ buttonText => setAttributes( { buttonText } ) }
                />
                <TextControl
                    label={ __( 'Link URL' ) }
                    value={ buttonURL }
                    onChange={ buttonURL => setAttributes( { buttonURL } ) }
                />
                <ToggleControl
                    label={ __("Open Link in New Tab?") }
                    help={ __( newTab ? 'Open Link in a New Tab' : 'Open Link in the Same Window' ) }
                    checked={ newTab }
                    onChange={ () => setAttributes( { newTab: ! newTab } ) }
                />
            </div>
		);

        return (
            this.props.editable ?
            <div style={ { width: '100%' } }>
                <Dropdown
                    //position="bottom left"
                    renderToggle={ ( { isOpen, onToggle } ) => (
                        <a 
                            className={ classes } 
                            href="#0"
                            onClick={ onToggle } 
                            aria-expanded={ isOpen }
                        >
                            { buttonText }
                        </a>      
                    ) }
                    renderContent={ () => ButtonControls }
                />
            </div>
            :
            <a 
                className={ classes } 
                href={ buttonURL }
                { ...newTab ? {target: '_blank'} : null }
            >
                { buttonText }
            </a>
        );
    }
}