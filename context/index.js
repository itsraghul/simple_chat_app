import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = (props) => {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');

  const value = { username, setUsername, setSecret, secret };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
