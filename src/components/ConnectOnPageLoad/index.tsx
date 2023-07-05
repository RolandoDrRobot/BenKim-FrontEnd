import React from 'react';
import axios from 'axios';
import { globalContext } from '../../hooks/appContext';

function ConnectOnPageLoad() {
  const {
    setUserID,
    setName,
    setDisplayName
  } = React.useContext(globalContext);

  React.useEffect(() => {
    const setUserData = async () => {
      const user = localStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        setUserID(parsedUser.id);
        setName(parsedUser.displayName);
      } else {
        try {
          await axios.get('http://localhost:443/api/user', {}).then((response) => {
            const user = { id: response.data.id, displayName: response.data.displayName };
            localStorage.setItem('user', JSON.stringify(user));
            setUserID(response.data.id);
            setName(response.data.name.givenName);
            setDisplayName(response.data.displayName)
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
