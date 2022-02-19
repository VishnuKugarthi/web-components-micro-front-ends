import React from 'react';
import { Button } from 'carbon-components-react';
import './App.css';
// import './styles/carbon.css';
// import myElementStyles from './styles/carbon.module.css';

// const internalStyles = myElementStyles;

function App() {
  // const linkElem = document.createElement('link');
  // linkElem.setAttribute('rel', 'stylesheet');
  // linkElem.setAttribute('href', myElementStyles);

  // document.querySelector('#mainRoot').appendChild(linkElem);

  // console.log('myStyles = ', myStyles);
  return (
    <div className='App' id='mainRoot'>
      {/* <link rel='stylesheet' href={JSON.stringify(myStyles)} /> */}
      {/* <style dangerouslySetInnerHTML={{ __html: internalStyles }}></style> */}
      <header className='App-header'>
        <h2>Carbon-React app</h2>
        <div>
          Hello Carbon! Well, not quite yet. This is the starting point for the
          Carbon tutorial.
          <Button>Button</Button>
          <Button kind='tertiary'>Button</Button>;
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
