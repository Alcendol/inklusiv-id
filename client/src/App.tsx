import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.text();
      setData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Display fetched data */}
      {data ? (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{data}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}

export default App;
