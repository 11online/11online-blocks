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
    MediaUpload,
    MediaUploadCheck,
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
                logoID,
                logoURL,
                logoWidth,
                logoHeight,
                buttons,
             },
            setAttributes
        } = this.props;

        const classesBtn = classnames('button', 'btn-custom-eleven-online');

        const onSelectLogo = img => {
            setAttributes({
                logoID: img.id,
                logoURL: img.url,
            });
        };

        const onRemoveLogo = () => {
            setAttributes({
                logoID: null,
                logoURL: null,
            });
        }

        const createDefaultButton = () => (
            {
                buttonURL: 'http://',
                buttonText: 'Click here',
                newTab: true,
            }
        );

        const renderAddActionBtn = () => (
            <Tooltip text={ __('Add Action Button') }>
                <Button
                    className={ classesBtn }
                    onClick={ () => {
                        const newButtons = [...buttons];
                        newButtons.push(createDefaultButton());
                        setAttributes({ buttons: newButtons });
                    }}
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
                <Toolbar>
                    <div className="wrapper-btn-custom-eleven-online">
                        {!logoID &&
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={onSelectLogo}
                                    type="image"
                                    value={logoID}
                                    render={({ open }) => (
                                        <Tooltip text={__('Click to Upload Logo Image')}>
                                            <Button
                                                className={classesBtn}
                                                onClick={open}
                                            >
                                                {__('Upload Logo')}
                                            </Button>
                                        </Tooltip>
                                    )}
                                >
                                </MediaUpload>
                            </MediaUploadCheck>
                        }
                        {logoID &&
                            <Tooltip text={__('Click to Remove Logo Image')}>
                                <Button
                                    className={classesBtn}
                                    onClick={onRemoveLogo}
                                >
                                    {__('Remove Logo')}
                                </Button>
                            </Tooltip>
                        } 
                    </div>
                </Toolbar>
                { (bgrOption === 'bgrImage') && 
                    <ImageControl
                        attributes={ {imgID, imgURL} }
                        setAttributes={ (newAttributes) => {
                            setAttributes({ imgID: newAttributes.imgID, imgURL: newAttributes.imgURL }) } }
                    />
                }
                <Toolbar>
                    <div className="wrapper-btn-custom-eleven-online">
                        { buttons.length < 3 && renderAddActionBtn() }
                    </div>
                </Toolbar>
                <Toolbar>
                    <div className="wrapper-btn-custom-eleven-online">
                        { buttons.length > 0 && renderRemoveActionBtn() }
                    </div>
                </Toolbar>
            </BlockControls>
        );
    }
}