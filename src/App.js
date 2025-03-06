import logo from './logo.svg';
import './App.css';
// import Combination from './Funclass';
// import { Button } from './Button';
// import { State, Background, Count } from './state';
// import { Todo } from './Todo';
// import Calculator from './Calculator';
// import Keypad from './Keypad';
// import { TestEffect, APIcall } from './TestEffect';
import { Routing } from './Routing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <h1>Hi Anusha welcome to React learning</h1>
          <img src='/logo192.png' style={{ width: 100 }}></img> */}
          {/* <Combination />
          <Button />
          <State />
          <Background />
          <Count />
          <Todo />
          <Calculator />
          <Keypad />
          <TestEffect />
          <APIcall /> */}
          <Routing />
        </div>
      </header>
    </div>
  );
}

export default App;
