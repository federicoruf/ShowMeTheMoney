import React, { useEffect, useState } from 'react';
import CurrentInvestments from './components/CurrentInvestments';
import { getCurrentUser } from './utils/getCurrentUser';
import { getInvestments } from './api/investments';
import { getUser } from './api/users';
import OtherInvestments from './components/OtherInvestments';

const App = () => {
  const [user, setUser] = useState(null);
  const [otherInvestments, setOtherInvestments] = useState(null);

  const fetchUser = async (name) => {
    const userData = await getUser(name);
    setUser(userData);
  };

  const fetchInvestments = async () => {
    if (user) {
      const investmentsData = await getInvestments();
      const userInvestmentNames = user.investments.map(({ name }) => name);
      const others = investmentsData.filter(
        ({ name }) => !userInvestmentNames.includes(name)
      );
      setOtherInvestments(others);
    }
  };

  useEffect(() => {
    const userName = getCurrentUser();
    fetchUser(userName);
  }, []);

  useEffect(() => {
    fetchInvestments();
  }, [user && user.investments]);

  if (!user || !otherInvestments) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Show me the money!</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <CurrentInvestments user={user} />
        <OtherInvestments otherInvestments={otherInvestments} />
      </div>
    </div>
  );
};

export default App;
