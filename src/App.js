import './App.css';

function App() {
  console.log('deploy ', process.env.REACT_APP_MY_API_KEY);
  return (
    <div className='App'>
      <header className='App-header'>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
