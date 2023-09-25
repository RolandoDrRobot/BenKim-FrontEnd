import * as React from 'react';

const globalContext = React.createContext();

// Provider in your app
function GlobalContextProvider(props) {
  const [userID, setUserID] = React.useState('');
  const [name, setName] = React.useState('');
  const [displayName, setDisplayName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [photo, setPhoto] = React.useState('');
  const [isTourOpen, setIsTourOpen] = React.useState(false);

  return (
    <globalContext.Provider value={{
        userID,
        setUserID,
        name,
        setName,
        email,
        setEmail,
        photo,
        setPhoto,
        isTourOpen,
        setIsTourOpen,
        displayName,
        setDisplayName,
      }}>
      {props.children}
    </globalContext.Provider>
  );
};

export { globalContext, GlobalContextProvider };
