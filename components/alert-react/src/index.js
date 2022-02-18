// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import App from './App';

export default class HeaderReactComponent extends HTMLElement {
  person = '';
  connectedCallback() {
    // this.shadowRoot.appendChild(template.content.cloneNode(true));
    // -------------
    this._innerHTML = this.innerHTML;
    this.person = this.getAttribute('person');
    // -------------

    this.root = this.attachShadow({ mode: 'open' });
    this._emotionCache = createCache({
      key: 'whatevs',
      container: this.shadowRoot,
    });
    this.render();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    ReactDOM.render(
      <CacheProvider value={this._emotionCache}>
        <App person={this.person} />
      </CacheProvider>,
      this.root
    );
  }
}

customElements.define('alert-react', HeaderReactComponent);
