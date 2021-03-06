import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);

  const Redirect = () => {
    /*  if (!user && !loading) {
      window.location = 'http://localhost:3001/login';
    } else */
    /* if (user) {
      window.location = 'http://localhost:3001/';
    } */
  };

  useEffect(() => {
    Redirect();
  }, [user, loading]);

  return (
    <>
      <h1>HomePage</h1>
    </>
  );
};

export default Home;
