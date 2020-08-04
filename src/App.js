import React from 'react';
import './App.css';
import GroupCounterContainer from './container/counterGroupContainer'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <GroupCounterContainer />
        </header>
      </div>
  );
}

export default App;
