import React from 'react';
import FormUserAccount from "./components/FormUserAccount";
import Options from "./components/UserOptions";

import { UserContextProvider } from "./context/userContext";

function App() {
  const [selected, setSelected] = React.useState('signin');

  return (
    <UserContextProvider>
      <div className="main-container">
        {
          selected === 'signin' 
            ? <FormUserAccount buttonValue="sign in" option="sign in" />
            : <FormUserAccount buttonValue="sign up" option="sign up" />
        }
        {selected !== '' && <Options onPressed={setSelected}/>}
      </div>
    </UserContextProvider>
  )
}

export default App;
