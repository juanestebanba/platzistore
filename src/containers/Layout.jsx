import React from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const Layout = ({ children }) => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <div className="Layout">
        <Header />
        {children}
      </div>
    </AppContext.Provider>
  );
};

export default Layout;