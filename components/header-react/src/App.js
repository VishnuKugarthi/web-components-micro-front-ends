import React from 'react';

function App({ count }) {
  return (
    <div>
      <header>Vishnu T K </header>
      {/* <p>List of persons = {{ persons }}</p> */}
      <p>
        Name of person ={' '}
        {document.querySelector('header-react').attributes['persons'].value}
      </p>
    </div>
  );
}

export default App;
