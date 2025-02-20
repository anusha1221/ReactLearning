import logo from './logo.svg';
import './App.css';
import Combination from './Funclass';
import { Button } from './button';
import { State, Background, Count } from './state';

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
        </div>
      </header>
    </div>
  );
}

export default App;
