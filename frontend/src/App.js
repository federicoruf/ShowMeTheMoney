import React, { useEffect, useState } from 'react';
import CurrentInvestments from './components/CurrentInvestments';
import { getCurrentUser } from './utils/getCurrentUser';
import { getUser } from './api/users';

const App = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async (name) => {
    const userData = await getUser(name);
    setUser(userData);
  };

  useEffect(() => {
    const userName = getCurrentUser();
    fetchUser(userName);
  }, []);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Show me the money!</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <CurrentInvestments user={user} />
      </div>
    </div>
  );
};

export default App;
