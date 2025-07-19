import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [leetcode, setLeetcode] = useState({});
  const [codechef, setCodechef] = useState({});
  const backendURL = 'https://cp-backend-1-y2x8.onrender.com';

  useEffect(() => {
    axios.get(`${backendURL}/leetcode/Nandu_2007_`)
      .then(res => setLeetcode(res.data))
      .catch(err => console.error(err));
    axios.get(`${backendURL}/codechef/nandu_2007`)
      .then(res => setCodechef(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App" style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h1>CP Stats Dashboard</h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <div>
          <h2>LeetCode</h2>
          <p>Problems Solved: {leetcode.solved}</p>
          <p>Streak: {leetcode.streak}</p>
        </div>
        <div>
          <h2>CodeChef</h2>
          <p>Rating: {codechef.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
