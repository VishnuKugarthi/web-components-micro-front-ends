import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class HeaderReactComponent extends HTMLElement {
  connectedCallback() {
    this.root = this.attachShadow({ mode: 'open' });
    this.render();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    ReactDOM.render(<App />, this.root);
  }
}

customElements.define('header-react', HeaderReactComponent);
