import { useState } from 'react';
import './App.css';
import Counter from './ClassComponents/Counter';
import Wrapper from './ClassComponents/Wrapper';

function App() {

  const [change,setChange] = useState(0);

  return (
    <div className="App">
      <h3>Enter the number from where you want to start the counter</h3>
      <input onChange={(e)=>{setChange(e.target.value)}} type="number" name="number" id="" />
      {/* <button onSubmit={}></button> */}
      <Wrapper startFrom = {Number(change)} />
    </div>
  );
}

export default App;
