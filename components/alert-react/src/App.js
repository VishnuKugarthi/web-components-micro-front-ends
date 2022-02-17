import logo from './logo.svg';
import './App.css';

const davidStyle = {};

const styles = `

.App {
  background: yellow;
  padding: 1em;
  color: black;
}

margin: '2rem',
  padding: '1rem',
  backgroundColor: 'green',
`;

function App({ person }) {
  return (
    <div className='App'>
      <style dangerouslySetInnerHTML={{ __html: styles }}></style>
      <h3>alert-react application</h3>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Warning alert - Due to covid parcels may delay.</p>
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
