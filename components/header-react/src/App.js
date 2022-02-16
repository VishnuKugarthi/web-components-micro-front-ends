import React, { useEffect } from 'react';

function App({ person }) {
  useEffect(() => {
    // const personName =
    //   document.querySelector('header-react').attributes['persons'].value;
  }, []);

  return (
    <div>
      <header>Vishnu T K </header>
      {/* <p>List of persons = {{ persons }}</p> */}
      <p>Name of person ={person} </p>
    </div>
  );
}

export default App;
