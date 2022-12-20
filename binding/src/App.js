import logo from './logo.svg';
import './App.css';
import Bindingdata from './components/bindingdata';
import Headernav from './components/headernav';
import Todolist from './components/todolist';
import Todoobject from './components/todoobject';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Headernav/>
      <Bindingdata />
      <Todolist/>
      <Todoobject/>
      <Counter val={5} step={5}/>
      <Counter val={10} step={10}/>
    </div>
  );
}

export default App;
