import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  //let UserName = localStorage.getItem('UserName');
  const [Name, setName] = useState('Gautam');
  const [count, setCount] = useState(0)

  const changeFuckTime = () =>  {
    setCount(prev => prev+1);
  };

  useEffect(() => {
    setInterval(() => {
     // changeFuckTime();
    },2000);
  }, [])

  const updateName = (event) => {
    const kl = event.target.value;
    setName(kl);
    setCount(0);
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Hi {UserName} , We are glad to see you back !!
        </p> */}
        <p className="normal-input">
          <input type='text' placeholder="Give me the name i will fuck them" onChange={updateName} />
        </p>
        <p>
          Hi {Name}, Fuck you !! {count} Times
        </p>
       <button className='normal-button' onClick={changeFuckTime}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
