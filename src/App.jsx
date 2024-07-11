import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Github action with surge.sh</h2>
      <p>This is just for testing github actions</p>
    </>
  );
}

export default App;
