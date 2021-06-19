import React from 'react';
import { UserContextProvider } from "./context/userContext";
import { NewsContextProvider } from './context/newsContext';

import Home from './screen/home';


function App() {
  return (
    <UserContextProvider>
      <NewsContextProvider>
        <Home />
      </NewsContextProvider>
    </UserContextProvider>
  )
}

export default App;
