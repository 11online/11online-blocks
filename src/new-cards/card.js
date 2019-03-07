/**
 * Card Component dependencies
 */
import './editor.scss';
import './style.scss';

import classnames from 'classnames';
import ActionButton from "../assets/js/action-button";
import icons from './icons';

/**
 * Used Libraries
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { RichText } = wp.editor;
const {
    Tooltip,
    Button,
} = wp.components;

/**
 * Create a Card Component
 */
export default class Card extends Component {

    constructor(props) {
        super(...arguments);
        this.props = props;
    }

    render() {
        const {
            attributes: {
                currentCard,
                isEditing,
                cards,
            },
            className,
            index,
            editable,
            setAttributes,
        } = this.props;

        const classes = classnames(className, 'newcard-eleven-online');

        const renderEditCardBtn = () => (
            <Tooltip text={__('Edit Card')}>
                <Button
                    className={"button"}
                    disabled={isEditing && currentCard !== index}
                    onClick={() => setAttributes({ isEditing: true, currentCard: index })}
                >
                    {icons.edit}
                </Button>
            </Tooltip>
        );

        const renderSaveCardBtn = () => (
            <Tooltip text={__('Save Changes')}>
                <Button
                    className={"button"}
                    onClick={() => setAttributes({ isEditing: false, currentCard: -1 })}
                >
                    {icons.check}
                </Button>
            </Tooltip>
        );

        const renderDeleteCardBtn = () => (
            <Tooltip text={__('Delete Card')}>
                <Button
                    className={"button"}
                    disabled={cards.length === 1}
                    onClick={() => {
                        const newCards = [...cards];
                        newCards.splice(index, 1);
                        setAttributes({ cards: newCards });
                    }}
                >
                    {icons.delete}
                </Button>
            </Tooltip>
        );

        const setBtnAttributeHelper = (newAttributes) => {
            const newCards = [...cards];
            for (let key in newAttributes) {
                newCards[index][key] = newAttributes[key];
            }
            setAttributes({ cards: newCards });
        }

        const renderForEditing = () => (
            <Fragment>
                <RichText
                    tagName={cards[index].cardHeadingSize}
                    formattingControls={['bold', 'italic', 'strikethrough']}
                    placeholder={__('Add your card title')}
                    value={cards[index].cardTitle}
                    style={{ color: cards[index].colorFontControl }}
                    onChange={(cardTitle) => {
                        const newCards = [...cards];
                        newCards[index].cardTitle = cardTitle;
                        setAttributes({ cards: newCards });
                    }}
                />
                <RichText
                    tagName="p"
                    formattingControls={['bold', 'italic', 'strikethrough']}
                    placeholder={__('Add your card text')}
                    value={cards[index].cardText}
                    style={{ color: cards[index].colorFontControl, marginBottom: '15px' }}
                    onChange={(cardText) => {
                        const newCards = [...cards];
                        newCards[index].cardText = cardText;
                        setAttributes({ cards: newCards });
                    }}
                />
                {cards[index].cardBtnPresent &&
                    <div className="btn-mycard-eleven-online">
                        <Tooltip text={__('Click to add or edit Button Text and Link URL')}>
                            <ActionButton
                                editable={true}
                                attributes={{ ...cards[index], ...this.attributes }}
                                setAttributes={setBtnAttributeHelper}
                            />
                        </Tooltip>
                    </div>
                }
            </Fragment>
        );

        const renderForDone = () => (
            <Fragment>
                <RichText.Content
                    tagName={cards[index].cardHeadingSize}
                    value={cards[index].cardTitle}
                    style={{ color: cards[index].colorFontControl }}
                />
                <RichText.Content
                    tagName="p"
                    value={cards[index].cardText}
                    style={{ color: cards[index].colorFontControl, marginBottom: '15px' }}
                />
                {cards[index].cardBtnPresent &&
                    <div className="btn-mycard-eleven-online">
                        {<ActionButton
                            editable={false}
                            attributes={{ ...cards[index], ...this.attributes }}
                            setAttributes={setBtnAttributeHelper}
                        />
                        }
                    </div>
                }
            </Fragment>
        );

        return (
            editable ?
                <div className={classes}>
                    <Fragment>
                        <div className="card-wrapper-eleven-online">
                            <div className="buttons-wrapper-eleven-online">
                                {isEditing && currentCard === index ?
                                    renderSaveCardBtn()
                                    :
                                    renderEditCardBtn()
                                }
                                {renderDeleteCardBtn()}
                            </div>
                            
                            <div className="newcard-wrapper-eleven-online" style={{ textAlign: cards[index].cardTextAlignment }}>
                                {isEditing && currentCard === index ? renderForEditing() : renderForDone()}
                                {cards[index].imgID &&
                                    <div
                                        className="newcard-eleven-online-img" style={ { backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cards[index].imgURL})`, opacity: Number(cards[index].imgOpacity) * 0.1 } }
                                ></div>
                                }
                            </div>
                        </div>
                    </Fragment>
                </div>
                :
                <Fragment>
                    <div className={classes}>
                        <div className="newcard-wrapper-eleven-online" style={{ textAlign: cards[index].cardTextAlignment }}>
                            {renderForDone()}
                            {cards[index].imgID &&
                                <div
                                className="newcard-eleven-online-img"
                                style={ { backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cards[index].imgURL})`, opacity: Number(cards[index].imgOpacity) * 0.1 }}
                            ></div>
                            }
                        </div> 
                    </div>
                </Fragment>
        );
    }
}