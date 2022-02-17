import React from 'react';
// import './App.css';
// import styles from './App.module.css';

const styles = `
.buy-tools {
  background: lightgreen;
  padding: 1em;
}
.container {
  background: violet;
  padding: 1em;
}

.btn {
  width: 100%;
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
}
`;

function App({ person }) {
  return (
    <div className='container'>
      <style dangerouslySetInnerHTML={{ __html: styles }}></style>
      <h3>header-react application</h3>

      <div>
        <header>Vishnu T K </header>
        <p>Name of person ={person} </p>
      </div>
    </div>
  );
}

export default App;
