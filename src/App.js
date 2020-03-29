import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts").then(
        response => response.json()
      )

      setData(result);



    };
    fetchData();


  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>videos</h1>


      </header>
     
      {data.map( users => (

        <div>
          <h2>{users.title}</h2>

        </div>


           )

      )}
    </div>
  );
}

export default App;
