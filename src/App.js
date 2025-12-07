import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import TextInput from './Components/TextInput';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Hooks Practice Again</p>
        <Counter />
        <TextInput />
        <TodoList />
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