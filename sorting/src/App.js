import logo from './logo.svg';
import './App.css';
import Sorting from './components/numsorting';
import Tablesort from './components/tablesort';
import Todolist from './datasharing/todolist';
import Arithemeticcomp from './components/arithemetic_comp';

function App() {
  const alertFun=()=>{
    alert("iam from app component")
  }
  return (
    <div className="App">
      <Sorting/>
      <Tablesort/>
      <hr/>
      <button onClick={alertFun}>call alert</button>
      <Arithemeticcomp/>
      <Todolist alertFun={alertFun}/>
    </div>
  );
}

export default App;
