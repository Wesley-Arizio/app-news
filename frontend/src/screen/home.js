import React from 'react';
import FormUserAccount from "../components/FormUserAccount";
import News from '../components/News';
import WelcomeAuthor from '../components/WelcomeAuthor';

import { useUserContext } from "../context/userContext";

const Form = () => {
  const [selected, setSelected] = React.useState('signin');

  return (
    <React.Fragment>
      {
        selected === 'signin' 
          ? <FormUserAccount buttonValue="sign in" option="sign in" selected={selected} setSelected={setSelected} />
        : selected === 'signup'
          ? <FormUserAccount buttonValue="sign up" option="sign up" selected={selected} setSelected={setSelected}  />
          : null
      }
    </React.Fragment>
  )
}

const Home = () => {
  const { isLoggedIn } = useUserContext();

  return (
    <div className="main-container">
    {isLoggedIn ? <WelcomeAuthor /> : <Form />}
    <News />
  </div>
  );
}

export default Home;