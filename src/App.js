import React from 'react';
import './App.css';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      {/* parent users component for scalability purposes
      everything containing the current project is in this component */}
      <Users />
    </div>
  );
}

export default App;
