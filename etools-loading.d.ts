/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   etools-loading.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {PolymerElement, html} from '@polymer/polymer/polymer-element';

/**
 * `etools-loading`
 *
 * Loading spinner.
 *
 * You can use this loading element:
 * - with an overlay: the loading spinner, message and overlay will be shown over your content area;
 * - simple, no overlay: the loading spinner and the message will be displayed inline-block.
 *
 * ### Styling
 *
 * You can use defined variables for styling.
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--etools-loading-overlay-transparency` | Overlay transparency | `0.6`
 * `--etools-loading-msg-color` | Loading message color | `#333333`
 * `--etools-loading-spinner-size` | Spinner size (width & height) | `20px`
 * `--etools-loading-bg-color` | Background color | `#ffffff`
 * `--etools-loading-border-color` | Border color | `#dedede`
 * `--etools-loading-shadow-color` | Shadow color | `#333333`
 * `--etools-loading-container` | Loading container style | `{}`
 * `--etools-loading-message` | Loading container style | `{}`
 *
 *
 * To change spinner colors use paper-spinner styling variables([paper-spinner docs](https://elements.polymer-project.org/elements/paper-spinner))
 */
declare class EtoolsLoading extends PolymerElement {
  active: boolean|null|undefined;
  loadingText: string|null|undefined;
  _loadingStateChanged(active: any): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "etools-loading": EtoolsLoading;
  }
}