import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

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

import 'ckeditor5/ckeditor5.css';

import './Docu.css';

export default function Docu() {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

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
			<h2>Congratulations on being assigned to this critical aeronautical engineering task! ✈️</h2>
			<p>
				You are responsible for enhancing our aircraft's design and performance through innovative engineering solutions. 
				Your work will significantly impact our mission to advance aerospace technology.
			</p>
			<h3>Job Information</h3>
			<table style="width: 100%; border: 1px solid #ccc; border-collapse: collapse;">
				<tr>
					<th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Item</th>
					<th style="border: 1px solid #ccc; padding: 8px; background-color: #f2f2f2;">Details</th>
				</tr>
				<tr>
					<td style="border: 1px solid #ccc; padding: 8px;">Job Title</td>
					<td style="border: 1px solid #ccc; padding: 8px;">Aeronautical Engineer</td>
				</tr>
				<tr>
					<td style="border: 1px solid #ccc; padding: 8px;">Department</td>
					<td style="border: 1px solid #ccc; padding: 8px;">Aerospace Design & Engineering</td>
				</tr>
				<tr>
					<td style="border: 1px solid #ccc; padding: 8px;">Project Start Date</td>
					<td style="border: 1px solid #ccc; padding: 8px;">[Insert Start Date]</td>
				</tr>
				<tr>
					<td style="border: 1px solid #ccc; padding: 8px;">Project Deadline</td>
					<td style="border: 1px solid #ccc; padding: 8px;">[Insert Deadline]</td>
				</tr>
				<tr>
					<td style="border: 1px solid #ccc; padding: 8px;">Supervisor</td>
					<td style="border: 1px solid #ccc; padding: 8px;">[Insert Supervisor Name]</td>
				</tr>
			</table>
			<h3>What's next?</h3>
			<ol>
				<li>
					<strong>Integrate Your Design into the Aircraft System:</strong> 
					Begin by implementing the design improvements into the current aircraft system. 
					Ensure that all modifications comply with safety and regulatory standards.
				</li>
				<li>
					<strong>Explore Advanced Aeronautical Technologies:</strong> 
					Research and experiment with cutting-edge aeronautical technologies. 
					Consider materials, propulsion systems, and aerodynamics enhancements that could optimize the aircraft's performance.
				</li>
				<li>
					<strong>Customize and Test:</strong> 
					Tailor your design to meet specific mission requirements. 
					Conduct rigorous testing in simulated and real-world environments to validate the design's effectiveness and safety.
				</li>
			</ol>
			<p>
				Keep pushing the boundaries of aeronautical engineering to achieve groundbreaking results. 
				Your expertise is invaluable as we strive to innovate and lead in aerospace technology.
			</p>
			<h3>Helpful resources</h3>
			<ul>
				<li>📝 <a href="[link to Aircraft Design Manuals]">Aircraft Design Manuals</a></li>
				<li>📕 <a href="[link to Aeronautical Engineering Documentation]">Aeronautical Engineering Documentation</a></li>
				<li>⭐️ <a href="[link to Engineering GitHub Repository]">Engineering GitHub Repository</a></li>
				<li>🏠 <a href="[link to Company's Aeronautical Engineering Homepage]">Company's Aeronautical Engineering Homepage</a></li>
				<li>🧑‍💻 <a href="[link to Engineering Simulation Demos]">Engineering Simulation Demos</a></li>
			</ul>
			<h3>Need help?</h3>
			<p>
				Encountering challenges or need additional resources? 
				Check the engineering support portal for troubleshooting tips or reach out to your supervisor for guidance. 
				Your expertise is crucial to the success of this project, and we're here to support you every step of the way!
			</p>
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
						<div ref={editorRef}>{isLayoutReady && <CKEditor editor={InlineEditor} config={editorConfig} />}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
