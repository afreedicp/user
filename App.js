
import './App.css';
import { useState } from 'react';

function App() {
  const [value,setValue]=useState('')
  const handlChange=event=>{
    setValue(event.target.value)
  }
  const validate=event=>{
    event.preventDefault()
  let test=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])(?!=.*abc)[A-Za-z\d@$!%*#?&]{8,}$/.test(value)
  console.log(test)
  if (!test){
    alert("         Warning:\n   Minimum eight characters\n   A number \n   One special character \n   One uppercase letter")
  }else  {
    alert("COMPLETE!")
    setValue('')
  }
  
  console.log(value)
      // let text=reg.test()
  }
  return (
    <div className="App">
     <form className="form">
  
    <input id="text"type="text" value={value} onChange={handlChange} className="form-input"placeholder="enter yor input"/>
    
  <input  className="btn" type="submit"  value="Submit"  onClick={validate}/>
</form>
    </div>
  );
}

export default App;
