import logo from './logo.svg';
import './App.css';
import Counter from './features/Counter';
import CounterGroup from './features/CounterGroup';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <CounterGroup size={5}/>
    </div>
  );
}

export default App;
