import React, { useState } from "react";
import Greeting from "./Greeting";
import Counter from "./Counter";

function App() {
  const [name, setName] = useState("Brian");
  const [count, setCount] = useState(0);

  // Intentional issue: forgot to pass name as prop
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Debugging Checkpoint</h1>
      <Greeting name={name} />
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
