/**
 * Controls component dependencies
 */
import ImageControl from "../assets/js/image-control";
import classnames from 'classnames';

/**
 * Internal Toolbar Controls Libraries
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
} = wp.editor;
const {
    Button,
    Tooltip,
    Toolbar,
} = wp.components;

/**
 * Create a Block Controls wrapper Component
 */
export default class Controls extends Component {

    constructor(props) {
        super(...arguments);
        this.props = props;
    }

    render() {
        const {
            attributes: { 
                textAlignment,
                bgrOption, 
                imgID,
                imgURL,
                buttons,
             },
            setAttributes
        } = this.props;

        const classesBtn = classnames('button', 'btn-custom-eleven-online');
        
        const createDefaultButton = () => (
            {
                buttonURL: 'http://',
                buttonText: 'Click here',
                buttonStyleClass: 'primary',
                newTab: true,
            }
        );

        const onAddButton = () => {
            const newButtons = [...buttons];
            newButtons.push(createDefaultButton());
            setAttributes({ buttons: newButtons });
        };

        const renderAddActionBtn = () => (
            <Tooltip text={ __('Add Action Button') }>
                <Button
                    className={ classesBtn }
                    onClick={ onAddButton }
                >
                    { __('Add Button') }
                </Button>
            </Tooltip>
        );

        const renderRemoveActionBtn = () => (
            <Tooltip text={ __('Remove Action Button') }>
                <Button
                    className={ classesBtn }
                    onClick={ () => {
                        const newButtons = [...buttons];
                        newButtons.pop();
                        setAttributes({ buttons: newButtons });
                    } }
                >
                    { __('Remove Button') }
                </Button>
            </Tooltip>
        );
        
        return (
            <BlockControls>
                <AlignmentToolbar
                    value={ textAlignment }
                    onChange={ textAlignment => setAttributes( { textAlignment } ) }
                />
                { (bgrOption === 'bgrImage') && 
                    <div className="wrapper-btn-custom-eleven-online">
                        <ImageControl
                            attributes={ {imgID, imgURL} }
                            setAttributes={ (newAttributes) => {
                                setAttributes({ imgID: newAttributes.imgID, imgURL: newAttributes.imgURL }) } }
                        />
                    </div>
                }
                <Toolbar>
                    <div className="wrapper-btn-custom-eleven-online">
                        { buttons.length < 4 && renderAddActionBtn() }
                    </div>
                </Toolbar>
                <Toolbar>
                    <div className="wrapper-btn-custom-eleven-online">
                        { buttons.length && renderRemoveActionBtn() }
                    </div>
                </Toolbar>
            </BlockControls>
        );
    }
}