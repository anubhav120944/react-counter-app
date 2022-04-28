import { useState } from 'react';
import './Styles/App.css';
import Wrapper from './Components/Wrapper';

function App() {

  const [change, setChange] = useState(0);

  return (
    <div className="App">
      <h2 className='title'>COUNTER APP</h2><br/>
      <input onChange={(e) => { setChange(e.target.value) }} type="number" name="number" placeholder="Enter..." />
      <h5>Enter the number from where you want to start the counter</h5>
      <Wrapper startFrom={Number(change)} />
    </div>
  );
}

export default App;
