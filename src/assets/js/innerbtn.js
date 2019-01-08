/**
 * Internal Toolbar Controls Libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    TextControl,
    Dropdown,
    ToggleControl,
} = wp.components;

/**
 * Create a Block Controls wrapper Component
 */
export default class InnerBtn extends Component {

    constructor(props) {
        super( ...arguments );
        this.props = props;
    }

    render() {
        const {
            attributes: { 
                cardBtnText,
                cardBtnURL,
                cardTextAlignment,
                CardBtnStyleClass,
                newTab,
             },
            setAttributes
          } = this.props;

          const classes = classnames(
            CardBtnStyleClass,
            'button'
        );

          const ButtonControls = (
            <div className='button-box'>
                <TextControl
                    label={ __( 'Button Text' ) }
                    value={ cardBtnText }
                    onChange={ cardBtnText => setAttributes( { cardBtnText } ) }
                />
                <TextControl
                    label={ __( 'Link URL' ) }
                    value={ cardBtnURL }
                    onChange={ cardBtnURL => setAttributes( { cardBtnURL } ) }
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
                        <div style={ { textAlign: cardTextAlignment } }>
                            <a 
                                className={ classes } 
                                href="#0"
                                onClick={ onToggle } 
                                aria-expanded={ isOpen }
                            >
                                { cardBtnText }
                            </a>
                        </div>       
                    ) }
                    renderContent={ () => ButtonControls }
                />
            </div>
            :
            <a 
                className={ classes } 
                href={ cardBtnURL }
                { ...newTab ? {target: '_blank'} : null }
            >
                { cardBtnText }
            </a>
        );
    }
}