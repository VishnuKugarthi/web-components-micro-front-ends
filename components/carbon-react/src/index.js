import React from 'react';
import ReactDOM from 'react-dom';
import root from 'react-shadow/styled-components';
import App from './App';
// import './createShadowRoot'; // must be imported above css files
// import carbonCss from './sample.module.css';
import carbonCss from './styles/source.scss';
// import './App.css';

// import reportWebVitals from './reportWebVitals';

console.log('carbonCss = ', carbonCss);

const styles = [carbonCss];

console.log('styles = ', styles);

ReactDOM.render(
  <root.div className='quote'>
    <React.StrictMode>
      <App />
      <style type='text/css'>{styles}</style>
      {/* {console.log('carbonCss ---- = ', carbonCss)}
      {carbonCss.map((item) => console.log('item = ', item))} */}
    </React.StrictMode>
  </root.div>,
  document.getElementById('root')
);

// // // // // // // // // If you want to start measuring performance in your app, pass a function
// // // // // // // // // to log results (for example: reportWebVitals(console.log))
// // // // // // // // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // // // // // // // reportWebVitals();

// // // // // // // // ----------------------------------------------------------------

// // // import React from 'react';
// // // import ReactDOM from 'react-dom';
// // import createCache from '@emotion/cache';
// // import { CacheProvider } from '@emotion/react';
// // // import App from './App';

// // // // // // // Read SCSS file as a raw CSS text
// // // // // // import styleText from './styles/source.scss';

// // // // // // const sheet = new CSSStyleSheet();
// // // // // // sheet.replaceSync(styleText);

// // // // // // export default class HeaderReactComponent extends HTMLElement {
// // // // // //   person = '';
// // // // // //   connectedCallback() {
// // // // // //     // this.shadowRoot.appendChild(template.content.cloneNode(true));
// // // // // //     // -------------
// // // // // //     this._innerHTML = this.innerHTML;
// // // // // //     this.person = this.getAttribute('person');
// // // // // //     // -------------

// // // // // //     const shadowRoot = this.attachShadow({ mode: 'open' });

// // // // // //     // Attaching the style sheet to the Shadow DOM of this component
// // // // // //     shadowRoot.adoptedStyleSheets = [sheet];

// // // // // //     // this.shadowRoot.appendChild(template.content.cloneNode(true));
// // // // // //     this._emotionCache = createCache({
// // // // // //       key: 'whatevs',
// // // // // //       container: this.shadowRoot,
// // // // // //     });
// // // // // //     this.render();
// // // // // //   }

// // // // // //   disconnectedCallback() {
// // // // // //     ReactDOM.unmountComponentAtNode(this);
// // // // // //   }

// // // // // //   render() {
// // // // // //     ReactDOM.render(
// // // // // //       <CacheProvider value={this._emotionCache}>
// // // // // //         <App person={this.person} />
// // // // // //       </CacheProvider>,
// // // // // //       this.shadowRoot
// // // // // //     );
// // // // // //   }
// // // // // // }

// // // // // // class HeaderReactComponent extends HTMLElement {
// // // // // //   // constructor() {
// // // // // //   //   super();

// // // // // //   //   const shadowRoot = this.attachShadow({ mode: 'open' });

// // // // // //   //   // Attaching the style sheet to the Shadow DOM of this component
// // // // // //   //   shadowRoot.adoptedStyleSheets = [sheet];

// // // // // //   //   shadowRoot.innerHTML = this.render();
// // // // // //   // }

// // // // // //   connectedCallback() {
// // // // // //     const shadowRoot = this.attachShadow({ mode: 'open' });

// // // // // //     // Attaching the style sheet to the Shadow DOM of this component
// // // // // //     shadowRoot.adoptedStyleSheets = [sheet];

// // // // // //     this._emotionCache = createCache({
// // // // // //       key: 'whatevs',
// // // // // //       container: shadowRoot,
// // // // // //     });
// // // // // //     // every property assigned to the element before your component was defined, is available now
// // // // // //     this.render();
// // // // // //   }

// // // // // //   disconnectedCallback() {
// // // // // //     ReactDOM.unmountComponentAtNode(this);
// // // // // //   }

// // // // // //   render() {
// // // // // //     ReactDOM.render(
// // // // // //       <CacheProvider value={this._emotionCache}>
// // // // // //         <App person={this.person} />
// // // // // //       </CacheProvider>,
// // // // // //       this.shadowRoot
// // // // // //     );
// // // // // //   }
// // // // // // }

// // // // // // customElements.define('icfs-uishell-react', HeaderReactComponent);

// // // // // // import React, { Component } from 'react';
// // // // // // // import { render } from 'react-dom';
// // // // // import { StyleSheetManager } from 'styled-components';

// // // // // import App from './App';

// // // // // // export function MainComponent() {
// // // // // //   // get our shadow HOST
// // // // // //   const host = document.querySelector('#vishnu-app');

// // // // // //   // create a shadow root inside it
// // // // // //   const shadow = host.attachShadow({ mode: 'open' });

// // // // // //   // create a slot where we will attach the StyleSheetManager
// // // // // //   const styleSlot = document.createElement('section');
// // // // // //   // append the styleSlot inside the shadow
// // // // // //   shadow.appendChild(styleSlot);

// // // // // //   // create the element where we would render our app
// // // // // //   const renderIn = document.createElement('div');
// // // // // //   // append the renderIn element inside the styleSlot
// // // // // //   styleSlot.appendChild(renderIn);

// // // // // //   // render the app
// // // // // //   return (
// // // // // //     (
// // // // // //       <StyleSheetManager target={styleSlot}>
// // // // // //         <App />
// // // // // //       </StyleSheetManager>
// // // // // //     ),
// // // // // //     renderIn
// // // // // //   );
// // // // // // }

// // // // // export default class HeaderClassComponent extends HTMLElement {
// // // // //   // constructor() {
// // // // //   //   super();
// // // // //   // }
// // // // //   connectedCallback() {
// // // // //     let host;
// // // // //     let shadow;
// // // // //     let styleSlot;
// // // // //     // get our shadow HOST
// // // // //     host = document.querySelector('#vishnu-app');

// // // // //     // create a shadow root inside it
// // // // //     shadow = host.attachShadow({ mode: 'open' });

// // // // //     // create a slot where we will attach the StyleSheetManager
// // // // //     styleSlot = document.createElement('section');
// // // // //     // append the styleSlot inside the shadow
// // // // //     shadow.appendChild(styleSlot);

// // // // //     // create the element where we would render our app
// // // // //     const renderIn = document.createElement('div');
// // // // //     // append the renderIn element inside the styleSlot
// // // // //     styleSlot.appendChild(renderIn);
// // // // //   }

// // // // //   // render() {
// // // // //   //   <div>
// // // // //   //     <MainComponent />
// // // // //   //   </div>;
// // // // //   // }
// // // // //   render() {
// // // // //     ReactDOM.render(
// // // // //       <StyleSheetManager target={this.styleSlot}>
// // // // //         <App person={this.person} />
// // // // //       </StyleSheetManager>,
// // // // //       this.shadowRoot
// // // // //     );
// // // // //   }
// // // // // }

// // // // // customElements.define('icfs-uishell-react', HeaderClassComponent);

// // // // import React from 'react';
// // // // import { render } from 'react-dom';
// // // // import { StyleSheetManager } from 'styled-components';

// // // // import App from './App';

// // // // // Read SCSS file as a raw CSS text
// // // // import styleText from './styles/source.scss';

// // // // const sheet = new CSSStyleSheet();
// // // // sheet.replaceSync(styleText);

// // // // // get our shadow HOST
// // // // const host = document.querySelector('#react-app');

// // // // // create a shadow root inside it
// // // // const shadow = host.attachShadow({ mode: 'open' });

// // // // // Attaching the style sheet to the Shadow DOM of this component
// // // // shadow.adoptedStyleSheets = [sheet];

// // // // // create a slot where we will attach the StyleSheetManager
// // // // const styleSlot = document.createElement('section');
// // // // // append the styleSlot inside the shadow
// // // // shadow.appendChild(styleSlot);

// // // // // create the element where we would render our app
// // // // const renderIn = document.createElement('div');
// // // // // append the renderIn element inside the styleSlot
// // // // styleSlot.appendChild(renderIn);

// // // // // render the app
// // // // render(
// // // //   // <StyleSheetManager target={styleSlot}>
// // // //   <App />,
// // // //   // </StyleSheetManager>
// // // //   renderIn
// // // // );

// // // // ----------------------------------------------------------------

// // // // // Read SCSS file as a raw CSS text
// // // import styleText from './styles/source.scss';

// // // console.log('styleText --------- ', styleText);

// // // const sheet = new CSSStyleSheet();
// // // sheet.replaceSync(styleText);

// // // // Replace all styles synchronously for this style sheet
// // // // sheet.replaceSync('p { color: green; }, div { color: red; }');

// // // console.log('sheet --------- ', sheet);

// // // class FancyComponent1 extends HTMLElement {
// // //   constructor() {
// // //     super();

// // //     const shadowRoot = this.attachShadow({ mode: 'open' });

// // //     // Attaching the style sheet to the Shadow DOM of this component
// // //     shadowRoot.adoptedStyleSheets = [sheet];

// // //     shadowRoot.innerHTML = `
// // //       <div>
// // //         <p>Hello World</p>
// // //       </div>
// // //     `;
// // //   }
// // // }

// // // customElements.define('icfs-uishell-react', FancyComponent1);

// // import React from 'react';
// // import { render } from 'react-dom';
// // import carbonStyles from './styles/carbon.module.css';
// // import App from './App';

// // // const App = () => <div>React + Shadow DOM</div>;

// // const root = document.querySelector('#react-app');
// // root.attachShadow({ mode: 'open' });

// // this._emotionCache = createCache({
// //   key: 'whatevs',
// //   // container: this.root,
// // });

// // const cssFile = document.createElement('link');
// // cssFile.rel = 'stylesheet';
// // cssFile.href = './sample.css';

// // root.appendChild(cssFile);

// // render(
// //   <CacheProvider value={this._emotionCache}>
// //     <App />
// //   </CacheProvider>,
// //   root.shadowRoot
// // );

// import customSquareStyles from './styles/carbon.module.css';
// import App from './App';

// class CustomSquare extends HTMLElement {
//   constructor() {
//     super();

//     this.attachShadow({ mode: 'open' });

//     // Get the shadow root
//     const dummyRoot = document.querySelector('icfs-uishell-react').shadowRoot;
//     // Create div element for react to render into
//     const reactRoot = document.createElement('div');
//     reactRoot.setAttribute('id', 'react-root');
//     // Append react root to shadow root
//     dummyRoot.appendChild(reactRoot);
//     ReactDOM.render(<App />, reactRoot);

//     const divElement = document.createElement('div');

//     divElement.textContent = 'Text content.';

//     this.shadowRoot.appendChild(divElement);

//     const buttonElement = document.createElement('button');
//     buttonElement.setAttribute('class', 'bx--btn bx--btn--primary');
//     this.shadowRoot.appendChild(buttonElement);

//     customSquareStyles.use({ target: this.shadowRoot });

//     // // You can override injected styles
//     // const bgPurple = new CSSStyleSheet();
//     // const width = this.getAttribute('w');
//     // const height = this.getAttribute('h');

//     // bgPurple.replace(`div { width: ${width}px; height: ${height}px; }`);

//     // this.shadowRoot.adoptedStyleSheets = [bgPurple];

//     // `divElement` will have `100px` width, `100px` height and `red` background color
//   }
// }

// customElements.define('icfs-uishell-react', CustomSquare);

// export default CustomSquare;

// const template = document.createElement('template');
// template.innerHTML = `
// <style>
// @import "https://unpkg.com/carbon-components/css/carbon-components.min.css";
// </style>
// <div id="header"></div>
// <App person={this.person} />
// <button class="bx--btn bx--btn--primary" type="button">Sup?</button>`;

// const linkElement = document.createElement('link');
// linkElement.rel = 'stylesheet';
// linkElement.href =
//   'https://unpkg.com/carbon-components/css/carbon-components.min.css';

// class WhatsUp extends HTMLElement {
//   constructor() {
//     super();
//   }
//   connectedCallback() {
//     // this.shadowRoot.appendChild(linkElement.content.cloneNode(true));
//     // const button = this.shadowRoot.querySelector('button');
//     // button.addEventListener('click', this.handleClick);

//     this.attachShadow({ mode: 'open' });

//     this.shadowRoot.appendChild(linkElement.content.cloneNode(true));

//     // document
//     //   .querySelector('icfs-uishell-react')
//     //   .shadowRoot.appendChild(linkElement);
//     // this.shadowRoot.appendChild(linkElement);
//     console.log('this.shadowRoot = ', this.shadowRoot.querySelector('link'));

//     this.render();
//   }

//   // handleClick(e) {
//   //   alert('Sup?');
//   // }

//   disconnectedCallback() {
//     ReactDOM.unmountComponentAtNode(this);
//   }

//   render() {
//     ReactDOM.render(
//       //  <CacheProvider value={this._emotionCache}>
//       // <App person={this.person} />
//       <h1>react application</h1>,
//       //  </CacheProvider>
//       this.shadowRoot
//     );
//   }
// }

// window.customElements.define('icfs-uishell-react', WhatsUp);
