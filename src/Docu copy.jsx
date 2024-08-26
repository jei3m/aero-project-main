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
		<p>&nbsp;</p><figure class="table" style="width:100%;"><table class="ck-table-resized" style="border:1px solid #ccc;"><colgroup><col style="width:35.61%;"><col style="width:4.5%;"><col style="width:55.18%;"><col style="width:4.71%;"></colgroup><thead><tr><th style="background-color:#f2f2f2;border:1px solid #ccc;padding:8px;" colspan="4"><h3>WORK CARD</h3><h3><strong>TASK DESCRIPTION: ENGINE ASSEMBLY</strong></h3></th></tr></thead><tbody><tr><td style="border:1px solid #ccc;padding:8px;"><h6>DATE</h6></td><td>&nbsp;</td><td style="border:1px solid #ccc;padding:8px;"><h6>ATA</h6></td><td>&nbsp;</td></tr><tr><td style="border:1px solid #ccc;padding:8px;"><h6>A/C REG</h6></td><td>&nbsp;</td><td style="border:1px solid #ccc;padding:8px;"><h6>TASK CODE</h6></td><td>&nbsp;</td></tr><tr><td style="border:1px solid #ccc;padding:8px;"><h6>MSN</h6></td><td>&nbsp;</td><td style="border:1px solid #ccc;padding:8px;"><h6>THRESHOLD / INTERVAL</h6></td><td>&nbsp;</td></tr><tr><td><h6>STATION</h6></td><td>&nbsp;</td><td><h6>MANHOUR</h6></td><td>&nbsp;</td></tr><tr><td style="border:1px solid #ccc;padding:8px;"><h6>LOGBOOK SEQ NO.</h6></td><td>&nbsp;</td><td style="border:1px solid #ccc;padding:8px;"><h6>SKILL</h6></td><td>&nbsp;</td></tr><tr><td style="border:1px solid #ccc;padding:8px;"><h6>WORK PACKAGE CONTROL NO.</h6></td><td>&nbsp;</td><td style="border:1px solid #ccc;padding:8px;"><h6>ZONE</h6></td><td>&nbsp;</td></tr></tbody></table></figure><figure class="table" style="width:100%;"><table class="ck-table-resized"><colgroup><col style="width:35.47%;"><col style="width:4.73%;"><col style="width:35.61%;"><col style="width:4.73%;"><col style="width:19.46%;"></colgroup><tbody><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><h6>TASK DESCRIPTION</h6></td><td>&nbsp;</td><td><h6>MECH</h6></td><td>&nbsp;</td><td><h6>INSP</h6></td></tr><tr><td><h6>&nbsp;</h6></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><h6>&nbsp;</h6></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><h6>&nbsp;</h6></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><h6>&nbsp;</h6></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><h6>&nbsp;</h6></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><h6>&nbsp;</h6></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><h6>&nbsp;</h6></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></tbody></table></figure>
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
				<div className="html-output-card">
					<h2>Editor HTML Output</h2>
					<div className="html-output">
						<pre>{editorData}</pre>
					</div>
				</div>
			</div>
		</div>
	);
}
