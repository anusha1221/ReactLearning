import logo from './logo.svg';
import './App.css';
import Combination from './Funclass';
import { Button } from './Button';
import { State, Background, Count } from './state';
import { Todo } from './Todo';
import Calculator from './Calculator';
import Keypad from './Keypad';
import { TestEffect, APIcall } from './TestEffect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Hi Anusha welcome to React learning</h1>
          <Combination />
          <Button />
          <State />
          <Background />
          <Count />
          <Todo />
          <Calculator />
          <Keypad />
          <TestEffect />
          <APIcall />
        </div>
      </header>
    </div>
  );
}

export default App;
