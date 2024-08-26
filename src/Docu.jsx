import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import 'ckeditor5/ckeditor5.css';
import './Docu.css';

import {
	InlineEditor,
	AccessibilityHelp,
	Autoformat,
	AutoLink,
	Autosave,
	Bold,
	Essentials,
	Heading,
	Italic,
	Link,
	Paragraph,
	SelectAll,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	Undo
} from 'ckeditor5';

export default function Docu() {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);
	const [editorData, setEditorData] = useState('');

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const handleEditorDataChange = (event, editor) => {
		setEditorData(editor.getData());
	};

	const editorConfig = {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'selectAll',
				'|',
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'|',
				'link',
				'insertTable',
				'|',
				'accessibilityHelp'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp,
			Autoformat,
			AutoLink,
			Autosave,
			Bold,
			Essentials,
			Heading,
			Italic,
			Link,
			Paragraph,
			SelectAll,
			Table,
			TableCaption,
			TableCellProperties,
			TableColumnResize,
			TableProperties,
			TableToolbar,
			TextTransformation,
			Underline,
			Undo
		],
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		initialData: `
			<h2>Job Information</h2><figure class="table" style="width:100%;"><table class="ck-table-resized" style="border:1px solid #ccc;"><colgroup><col style="width:37.37%;"><col style="width:4.72%;"><col style="width:53.19%;"><col style="width:4.72%;"></colgroup><thead><tr><th style="background-color:#f2f2f2;border:1px solid #ccc;padding:8px;">&nbsp;</th><th>&nbsp;</th><th style="background-color:#f2f2f2;border:1px solid #ccc;padding:8px;">&nbsp;</th><th>&nbsp;</th></tr></thead><tbody><tr><td style="border:1px solid #ccc;padding:8px;"><h6>JOB NO</h6></td><td>&nbsp;</td><td style="border:1px solid #ccc;padding:8px;"><h6>DATE RECEIVED:</h6></td><td>&nbsp;</td></tr><tr><td style="border:1px solid #ccc;padding:8px;"><h6>CUSTOMER</h6></td><td>&nbsp;</td><td style="border:1px solid #ccc;padding:8px;" colspan="2"><h6><strong>WORK AUTHORIZATION</strong></h6><h6>PLEASE CARRY OUT THE WORK SPECIFIED BELOW SUBJECT TO THE TERMS AND CONDITION OVERLEAF</h6></td></tr><tr><td style="border:1px solid #ccc;padding:8px;"><h6>AIRCRAFT&nbsp;</h6><h6>REGISTRATION</h6></td><td>&nbsp;</td><td style="border:1px solid #ccc;padding:8px;"><h6>INVOICE NO.</h6></td><td>&nbsp;</td></tr><tr><td><h6>DATE</h6></td><td>&nbsp;</td><td><h6>PAYMENT</h6></td><td>&nbsp;</td></tr><tr><td style="border:1px solid #ccc;padding:8px;"><h6>AIRCRAFT /&nbsp;</h6><h6>COMPONENT MODEL</h6></td><td>&nbsp;</td><td style="border:1px solid #ccc;padding:8px;">&nbsp;</td><td>&nbsp;</td></tr><tr><td style="border:1px solid #ccc;padding:8px;"><h6>AIRCRAFT / COMPONENT</h6><h6>SERIAL NO.</h6></td><td>&nbsp;</td><td style="border:1px solid #ccc;padding:8px;">&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure><figure class="table"><table><tbody><tr><td><h6>ITEM</h6></td><td><h6>WORK SCOPE &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h6></td></tr><tr><td><h6>1.</h6></td><td>&nbsp;</td></tr><tr><td><h6>2.</h6></td><td>&nbsp;</td></tr><tr><td><h6>3.</h6></td><td>&nbsp;</td></tr><tr><td><h6>4.</h6></td><td>&nbsp;</td></tr><tr><td><h6>5.</h6></td><td>&nbsp;</td></tr><tr><td><h6>6.</h6></td><td>&nbsp;</td></tr><tr><td><h6>7.</h6></td><td>&nbsp;</td></tr></tbody></table></figure>
		`,
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		placeholder: 'Type or paste your content here!',
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
		}
	};

	return (
		<div className='Appdocu'>
			<h1 className="title"> Job Card </h1>
			<div className="main-container">
				<div className="editor-container editor-container_inline-editor" ref={editorContainerRef}>
					<div className="editor-container__editor">
						{isLayoutReady && (
							<CKEditor
								editor={InlineEditor}
								config={editorConfig}
								onChange={handleEditorDataChange}
								ref={editorRef}
							/>
						)}
					</div>
				</div>
				{/* <div className="html-output-card">
					<h2>Editor HTML Output</h2>
					<div className="html-output">
						<pre>{editorData}</pre>
					</div>
				</div> */}
			</div>
		</div>
	);
}
