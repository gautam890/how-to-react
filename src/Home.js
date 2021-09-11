import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";


export function Home() {
  const [Name, setName] = useState("");
  const [count, setCount] = useState(0);

  const changeFuckTime = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    setInterval(() => {
      // changeFuckTime();
    }, 2000);
  }, []);

  const updateName = (event) => {
    const kl = event.target.value;
    setName(kl);
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="normal-input">
          <input
            type="text"
            placeholder="Give me the name"
            onChange={updateName}
          />
        </p>
        <p>
          Hi {Name ? Name : 'there'}, Fuck you !! {count} Times
        </p>
        <button className="normal-button" onClick={changeFuckTime}>
          Change Fuck times
        </button>
      </header>
    </div>
  );
}
