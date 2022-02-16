import logo from './logo.svg';
import './App.css';

const davidStyle = {
  margin: '2rem',
  padding: '1rem',
  backgroundColor: 'green',
};

function App({ person }) {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
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
      <h4 style={davidStyle}>Author = {person}</h4>
    </div>
  );
}

export default App;
