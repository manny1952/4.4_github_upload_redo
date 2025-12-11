import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import TextInput from './Components/TextInput';
import TodoList from './Components/TodoList';

/*function App() {
return (
<div>
<h1>Hello, React!</h1>
<p>This is a simple React application.</p>
</div>
);
}

*/

function App() {

  const handleExit = () => {
    window.close();
    window.location.href = "about:blank";
  };


  return (
    <div className="App">
      <header className="App-header">
        <p>React Hooks App Upload Practice 4.4</p>
        <Counter />
        <TextInput />
        <TodoList />
    <button 
        onClick={handleExit}
        style={{ 
          marginTop: '30px', 
          padding: '10px 20px', 
          fontSize: '20px',
          cursor: 'pointer', 
          borderRadius: '8px'
        
        }}
      >
        Exit APP to QUIT
      </button>

      </header>
    </div>
  );
}


export default App;




/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/