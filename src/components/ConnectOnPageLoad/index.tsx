import React from 'react';
import axios from 'axios';
import { globalContext } from '../../hooks/appContext';

function ConnectOnPageLoad() {
  const {
    setUserID,
    setName,
    setDisplayName,
    setPhoto,
    setEmail
  } = React.useContext(globalContext);

  React.useEffect(() => {
    const setUserData = async () => {
      const user = localStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserID(parsedUser.id);
        setName(parsedUser.name);
        setDisplayName(parsedUser.displayName)
        setPhoto(parsedUser.photo);
        setEmail(parsedUser.email)
      } else {
        try {
          await axios.get('http://localhost:443/api/user', {}).then((response) => {
            const user = { 
              id: response.data.id,
              name: response.data.displayName,
              displayName: response.data.displayName,
              email: response.data.email,
              photo: response.data.photos[0].value
            };
            localStorage.setItem('user', JSON.stringify(user));
            setUserID(response.data.id);
            setName(response.data.name.givenName);
            setDisplayName(response.data.displayName)
            setPhoto(response.data.photos[0].value);
            setEmail(response.data.email)
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
    setUserData()
  }, []);

  return (
    <>
    </>
  )
}

export default ConnectOnPageLoad;
