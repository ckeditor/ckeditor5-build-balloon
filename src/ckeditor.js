/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@solomoto/ckeditor5-font-color/src/fontcolor';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';

import './ckeditor.css';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	Bold,
	Italic,
	Underline,
	BlockQuote,
	Heading,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Alignment,
	FontFamily,
	FontColor,
	HorizontalLine,
	RemoveFormat,
	Strikethrough
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	toolbar: {
		items: [
			'fontFamily',
			'|',
			'bold',
			'italic',
			'underline',
			'|',
			'heading',
			'|',
			'fontColor',
			'alignment',
			'blockQuote',
			'removeFormat',
			'|',
			'numberedList',
			'bulletedList',
			'|',
			'link',
			'horizontalLine',
			'insertTable'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
