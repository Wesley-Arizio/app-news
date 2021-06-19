import React from 'react';
import { UserContextProvider } from "./context/userContext";

import Home from './screen/home';


function App() {
  return (
    <UserContextProvider>
      <Home />
    </UserContextProvider>
  )
}

export default App;
