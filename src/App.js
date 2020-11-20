import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Targets from './pages/targets/target';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Targets />
      </BrowserRouter>
      
    </div>
  );
}

export default App;