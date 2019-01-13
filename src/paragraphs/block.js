//  Import CSS.
import './style.scss';
//import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {  
	RichText,
	BlockControls,
 } = wp.editor;
const { 
	Toolbar,
    Button,
    Tooltip,
 }  = wp.components;
const Fragment = wp.element.Fragment;

registerBlockType( 'eleven-online/paragraphs', 
{
	title: __( 'Paragraphs' ),
	icon: {
		background: '#008B00',
		foreground: '#FFFFFF',
		src: 'editor-paragraph'
	},   
	category: 'common',
	keywords: [
		__( '11 Online' ),
		__( 'Paragraphs' ),
		__( 'Eleven Online' ),
	],
	attributes: {
		count: {
			type: 'number',
			default: 1,
		},
		paragraphs: {
			type: 'array',
			default: [
                {
                    text: 'Default Text'
                },
            ],
		},
	},

	edit: function( {attributes, setAttributes, className} ) {
		const { count, paragraphs } = attributes;
		
		const renderAddParagraphBtn = () => (
            <Tooltip text={ __( 'Add a New Paragraph' ) }>
                <Button
                    className={ "components-button button button-large" }
                    onClick={ () => { 
						let newParagraphs = [ ...paragraphs ];
						newParagraphs.push({text: 'Default Text'});
						setAttributes( { paragraphs: newParagraphs, count: count + 1 } ); 
					} }
                >
                    { __( 'Add Paragraph' ) }
                </Button>
            </Tooltip>
        );

        const renderParagraph = (index) => {
            return (
				<div className="my-paragraph">
					<RichText
						tagName="p"
						className={className}
						value={ paragraphs[index]['text'] }
						onChange={ ( value ) => { 
							let newParagraphs = [ ...paragraphs ];
							newParagraphs[index]['text'] = value;
							setAttributes( { paragraphs: newParagraphs } );
						} }
					/>
				</div>                
            );
		};
		
		const renderParagraphs2 = () => {
			let myParagraphs = [];

			for ( let i = 0; i < count; i++ ) {
				myParagraphs.push( renderParagraph(i) );
			}

			return myParagraphs;
		}

		const renderParagraphs = paragraphs.map( (p, index) => {
			return (
				<div className="my-paragraph">
					<RichText
						tagName="p"
						className={className}
						value={ p['text'] }
						onChange={ ( value ) => { 
							let newParagraphs = [ ...paragraphs ];
							newParagraphs[index]['text'] = value;
							setAttributes( { paragraphs: newParagraphs } );
						} }
					/>
				</div>
			);
		});
		
		return (
			<Fragment>
				<BlockControls>
                	<Toolbar>
						{ renderAddParagraphBtn() }
					</Toolbar>
				</BlockControls>
				{ renderParagraphs }
			</Fragment>		
			);
	},

	save: function({attributes, className}) {
		const { count, paragraphs } = attributes;

		const renderParagraphs = paragraphs.map( (p) => {
			return (
				<div className="my-paragraph">
					<RichText.Content
						tagName="p"
						className={className}
						value={ p['text'] }
					/>
				</div>
			);
		});

		const renderParagraphs2 = () => {
			let myParagraphs = [];

			for ( let i = 0; i < count; i++ ) {
				myParagraphs.push( 
					<div className="my-paragraph">
						<RichText.Content
							tagName="p"
							className={className}
							value={ paragraphs[i]['text'] }
						/>
					</div>	
				 );
			}

			return myParagraphs;
		}

		return (
			<Fragment>
				{ renderParagraphs }
			</Fragment>
		);
	},
} );
