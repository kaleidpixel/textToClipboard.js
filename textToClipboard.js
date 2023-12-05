/*!
 * TextToClipboard - A JavaScript library providing text copying functionality.
 *
 * @file
 * This library implements a button functionality to copy content from a specified textarea to the clipboard.
 * When the copy operation is successful, a temporary message is displayed to provide feedback to the user.
 *
 * @version 1.0.0
 * @license MIT
 *
 * @copyright 2023 (C) Kaleid Pixel
 * @author KAZUKI Otsuhata
 *
 * @example
 * // Example of initializing the library
 * new CopyButtonLibrary({
 *     copyButtonClass: 'myCopyButton', // Custom class name for the copy button
 *     copiedClass: 'myCopiedMessage',  // Custom class name for the copied message
 *     textBodyClass: 'myTextBody'      // Custom class name for the textarea containing the text to copy
 * });
 *
 * @param {Object} options - Configuration options for the library
 * @param {string} [options.copyButtonClass='copyBtn'] - CSS class name for the button with the copy functionality
 * @param {string} [options.copiedClass='copied']      - CSS class name for the element displaying the copied message
 * @param {string} [options.textBodyClass='textBody']  - CSS class name for the textarea containing the text to be copied
 */

/* jshint esversion: 6 */
(function () {
	'use strict';

	function TextToClipboard(options) {
		this.options = Object.assign({
			copyButtonClass: 'copyBtn',
			copiedClass    : 'copied',
			textBodyClass  : 'textBody'
		}, options);

		this.init();
	}

	TextToClipboard.prototype.init = function () {
		const buttons = document.querySelectorAll(`.${this.options.copyButtonClass}`);
		const copied = document.querySelectorAll(`.${this.options.copiedClass}`);
		const textBody = document.querySelectorAll(`.${this.options.textBodyClass}`);

		for (let i = 0; i < buttons.length; i++) {
			const hash = this.generateHash();

			buttons[i].classList.add(`${this.options.copyButtonClass}-${hash}`);

			if (copied[i]) {
				copied[i].classList.add(`${this.options.copiedClass}-${hash}`);
			}

			if (textBody[i]) {
				textBody[i].classList.add(`${this.options.textBodyClass}-${hash}`);
			}
		}

		this.setupCopyButtons();
	};

	TextToClipboard.prototype.generateHash = function () {
		return Math.random().toString(36).slice(2, 11);
	};

	TextToClipboard.prototype.setupCopyButtons = function () {
		const buttons = document.querySelectorAll(`.${this.options.copyButtonClass}`);

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', (function (button) {
				return function () {
					this.copyText(button);
				}.bind(this);
			}).call(this, buttons[i]));
		}
	};

	TextToClipboard.prototype.copyText = function (button) {
		const hash = button.className.match(new RegExp(this.options.copyButtonClass + '-(\\w+)'))[1];
		const textBody = document.querySelector(`.${this.options.textBodyClass}-${hash}`).value;
		const _this = this;

		navigator.clipboard.writeText(textBody).then(function () {
			_this.showCopiedMessage(button, hash);
		}).catch(function (err) {
			console.error('Failed to copy to clipboard: ', err);
		});
	};

	TextToClipboard.prototype.showCopiedMessage = function (button, hash) {
		const copiedMessage = document.querySelector(`.${this.options.copiedClass}-${hash}`);

		if (copiedMessage) {
			copiedMessage.style.display = 'block';
			setTimeout(function () {
				copiedMessage.style.display = 'none';
			}, 1000);
		}
	};

	window.TextToClipboard = TextToClipboard;
})();
