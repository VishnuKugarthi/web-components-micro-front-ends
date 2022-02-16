import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class HeaderReactComponent extends HTMLElement {
  person = '';
  connectedCallback() {
    // -------------
    this._innerHTML = this.innerHTML;
    this.person = this.getAttribute('person');
    // -------------

    this.root = this.attachShadow({ mode: 'open' });
    this.render();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    ReactDOM.render(<App person={this.person} />, this.root);
  }
}

customElements.define('header-react', HeaderReactComponent);
