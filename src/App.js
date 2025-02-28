import logo from './logo.svg';
import './App.css';
import Combination from './Funclass';
import { Button } from './Button';
import { State, Background, Count } from './state';
import { Todo } from './Todo';

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
        </div>
      </header>
    </div>
  );
}

export default App;
