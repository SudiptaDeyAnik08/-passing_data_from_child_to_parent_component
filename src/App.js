import logo from './logo.svg';
import './App.css';

import Child from './State_Lifting/Child.js'
import { useState } from 'react';

function App() {
  const [a,setA] = useState();

  const handelChildData = (info)=>{
    console.log("This is App/Parent Body"+info);
    setA(info);
  }



  const dataInfo = 'Hi from parante (App)'
  return (
    <div className="App">

      <Child data={dataInfo} onChangeData ={handelChildData}></Child>

      <p>{a}</p>
    </div>
  );
}

export default App;
