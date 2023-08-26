import { useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import Header from './components/Header/Header';


function App() {
  const[kg,setKg]=useState();


  const calculate=(weight)=>{
    const kilo=+weight*0.001;
    setKg(`${weight} grams = ${kilo.toFixed(4)} kg`)
  }
  const Reset=()=>{
    setKg("");
  }


  return (
    <div className="App">
      <Header></Header>
      <Input resetValue={Reset} onAddInput={calculate} enteredKg={kg}/>
    </div>
  );
}

export default App;
