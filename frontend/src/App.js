import React, { useEffect, useState } from 'react';
import CurrentInvestments from './components/CurrentInvestments';
import { getCurrentUser } from './utils/getCurrentUser';
import { getInvestments } from './api/investments';
import { getUser } from './api/users';
import OtherInvestments from './components/OtherInvestments';
import CurrentPortfolio from './components/CurrentPortfolio';
import AssetTransaction from './components/AssetTransaction';

const App = () => {
  const [user, setUser] = useState(null);
  const [otherInvestments, setOtherInvestments] = useState(null);
  const [allInvestments, setAllInvestments] = useState(new Map());
  const [selectedInvest, setSelectedInvest] = useState();
  const [errorMesssage, setErrorMessage] = useState(null);

  const fetchUser = async (name) => {
    const userData = await getUser(name);
    if (!userData) {
      setErrorMessage(
        'Ocurrio un error al intentar recuperar los datos del usuario'
      );
    } else {
      setErrorMessage(null);
      setUser(userData);
    }
  };

  const fetchInvestments = async () => {
    if (user) {
      const investmentsData = await getInvestments();
      const userInvestmentNames = user.investments.map(({ name }) => name);
      const others = investmentsData.filter(
        ({ name }) => !userInvestmentNames.includes(name)
      );

      const all = new Map(
        investmentsData.map(({ name, type, unitPrice }) => [
          name,
          { type, unitPrice },
        ])
      );
      setAllInvestments(all);
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

  const onSetSelectedInvest = (investment) => {
    if (investment) {
      const { name } = investment;
      const { unitPrice } = allInvestments.get(name);
      setSelectedInvest({ ...investment, unitPrice });
    } else {
      setSelectedInvest(null);
    }
  };

  if (errorMesssage) {
    return <h1>{errorMesssage}</h1>;
  }

  if (!user || !otherInvestments) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Show me the money!</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <CurrentInvestments
          user={user}
          selectedInvest={selectedInvest}
          setSelectedInvest={onSetSelectedInvest}
        />
        <OtherInvestments
          otherInvestments={otherInvestments}
          selectedInvest={selectedInvest}
          setSelectedInvest={onSetSelectedInvest}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {selectedInvest ? (
          <AssetTransaction
            user={user}
            setUser={setUser}
            selectedInvest={selectedInvest}
            setSelectedInvest={onSetSelectedInvest}
            allInvestments={allInvestments}
          />
        ) : (
          <CurrentPortfolio user={user} allInvestments={allInvestments} />
        )}
      </div>
    </div>
  );
};

export default App;
