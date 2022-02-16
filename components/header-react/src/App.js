import React from 'react';
// import './App.css';
import styles from './App.module.css';

{
  /* <style>
.headerStyle{
    background-color:orange;
}
</style> */
}

function App({ person }) {
  return (
    <div className={styles.headerStyle}>
      <header>Vishnu T K </header>
      <p>Name of person ={person} </p>
    </div>
  );
}

export default App;
