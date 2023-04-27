import './App.css';
import Nav from './components/nav/Nav';
import One from './components/one_dice/One';
import Spin from './components/spin/Spin';
import Task from './components/task/Task';
import Two from './components/two_dice/Two';

function App() {
  return (
    <div className="App  ">
     
     <div className="bgcircle">
      
     </div>
      <Nav />
      <div className="container-fluid">

      <Two/>
      <hr style={{border: "5px solid black"}}/>

      <Task/>
      <hr style={{border: "5px solid black"}}/>
       

      <One/>
      <hr style={{border: "5px solid black"}}/>

      <Spin/>
      </div>
    </div>
  );
}

export default App;
