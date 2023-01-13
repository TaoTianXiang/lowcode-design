/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import * as dom from '../../../base/browser/dom.js';
import { asArray } from '../../../base/common/arrays.js';
import { AsyncIterableObject } from '../../../base/common/async.js';
import { isEmptyMarkdownString, MarkdownString } from '../../../base/common/htmlContent.js';
import { DisposableStore } from '../../../base/common/lifecycle.js';
import { MarkdownRenderer } from '../../browser/core/markdownRenderer.js';
import { Position } from '../../common/core/position.js';
import { Range } from '../../common/core/range.js';
import { HoverProviderRegistry } from '../../common/modes.js';
import { IModeService } from '../../common/services/modeService.js';
import { getHover } from './getHover.js';
import * as nls from '../../../nls.js';
import { IConfigurationService } from '../../../platform/configuration/common/configuration.js';
import { IOpenerService } from '../../../platform/opener/common/opener.js';
const $ = dom.$;
export class MarkdownHover {
    constructor(owner, range, contents, ordinal) {
        this.owner = owner;
        this.range = range;
        this.contents = contents;
        this.ordinal = ordinal;
    }
    isValidForHoverAnchor(anchor) {
        return (anchor.type === 1 /* Range */
            && this.range.startColumn <= anchor.range.startColumn
            && this.range.endColumn >= anchor.range.endColumn);
    }
}
let MarkdownHoverParticipant = class MarkdownHoverParticipant {
    constructor(_editor, _hover, _modeService, _openerService, _configurationService) {
        this._editor = _editor;
        this._hover = _hover;
        this._modeService = _modeService;
        this._openerService = _openerService;
        this._configurationService = _configurationService;
    }
    createLoadingMessage(anchor) {
        return new MarkdownHover(this, anchor.range, [new MarkdownString().appendText(nls.localize('modesContentHover.loading', "Loading..."))], 2000);
    }
    computeSync(anchor, lineDecorations) {
        if (!this._editor.hasModel() || anchor.type !== 1 /* Range */) {
            return [];
        }
        const model = this._editor.getModel();
        const lineNumber = anchor.range.startLineNumber;
        const maxColumn = model.getLineMaxColumn(lineNumber);
        const result = [];
        let index = 1000;
        const lineLength = model.getLineLength(lineNumber);
        const languageId = model.getLanguageIdAtPosition(anchor.range.startLineNumber, anchor.range.startColumn);
        const maxTokenizationLineLength = this._configurationService.getValue('editor.maxTokenizationLineLength', {
            overrideIdentifier: languageId
        });
        if (typeof maxTokenizationLineLength === 'number' && lineLength >= maxTokenizationLineLength) {
            result.push(new MarkdownHover(this, anchor.range, [{
                    value: nls.localize('too many characters', "Tokenization is skipped for long lines for performance reasons. This can be configured via `editor.maxTokenizationLineLength`.")
                }], index++));
        }
        for (const d of lineDecorations) {
            const startColumn = (d.range.startLineNumber === lineNumber) ? d.range.startColumn : 1;
            const endColumn = (d.range.endLineNumber === lineNumber) ? d.range.endColumn : maxColumn;
            const hoverMessage = d.options.hoverMessage;
            if (!hoverMessage || isEmptyMarkdownString(hoverMessage)) {
                continue;
            }
            const range = new Range(anchor.range.startLineNumber, startColumn, anchor.range.startLineNumber, endColumn);
            result.push(new MarkdownHover(this, range, asArray(hoverMessage), index++));
        }
        return result;
    }
    computeAsync(anchor, lineDecorations, token) {
        if (!this._editor.hasModel() || anchor.type !== 1 /* Range */) {
            return AsyncIterableObject.EMPTY;
        }
        const model = this._editor.getModel();
        if (!HoverProviderRegistry.has(model)) {
            return AsyncIterableObject.EMPTY;
        }
        const position = new Position(anchor.range.startLineNumber, anchor.range.startColumn);
        return getHover(model, position, token)
            .filter(item => !isEmptyMarkdownString(item.hover.contents))
            .map(item => {
            const rng = item.hover.range ? Range.lift(item.hover.range) : anchor.range;
            return new MarkdownHover(this, rng, item.hover.contents, item.ordinal);
        });
    }
    renderHoverParts(hoverParts, fragment, statusBar) {
        return renderMarkdownHovers(hoverParts, fragment, this._editor, this._hover, this._modeService, this._openerService);
    }
};
MarkdownHoverParticipant = __decorate([
    __param(2, IModeService),
    __param(3, IOpenerService),
    __param(4, IConfigurationService)
], MarkdownHoverParticipant);
export { MarkdownHoverParticipant };
export function renderMarkdownHovers(hoverParts, fragment, editor, hover, modeService, openerService) {
    // Sort hover parts to keep them stable since they might come in async, out-of-order
    hoverParts.sort((a, b) => a.ordinal - b.ordinal);
    const disposables = new DisposableStore();
    for (const hoverPart of hoverParts) {
        for (const contents of hoverPart.contents) {
            if (isEmptyMarkdownString(contents)) {
                continue;
            }
            const markdownHoverElement = $('div.hover-row.markdown-hover');
            const hoverContentsElement = dom.append(markdownHoverElement, $('div.hover-contents'));
            const renderer = disposables.add(new MarkdownRenderer({ editor }, modeService, openerService));
            disposables.add(renderer.onDidRenderAsync(() => {
                hoverContentsElement.className = 'hover-contents code-hover-contents';
                hover.onContentsChanged();
            }));
            const renderedContents = disposables.add(renderer.render(contents));
            hoverContentsElement.appendChild(renderedContents.element);
            fragment.appendChild(markdownHoverElement);
        }
    }
    return disposables;
}
