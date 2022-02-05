import React, { useEffect, useState } from 'react';

const CurrentPortfolio = ({ user, allInvestments }) => {
  const { savings, investments } = user;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (user && allInvestments && total === 0) {
      let totalAssets = savings;

      investments.forEach(({ name, type, units }) => {
        const data = allInvestments.get(name);
        const assetPrice = data.unitPrice * units;
        totalAssets = totalAssets + assetPrice;
      });
      setTotal(total + totalAssets);
    }
  }, [user, allInvestments, total]);

  if (!user || !allInvestments || !total) {
    return <></>;
  }

  const calculateValue = (name, units) => {
    return allInvestments.get(name).unitPrice * units;
  };

  return (
    <div>
      <h1>Valor total cartera: AR$ {total}</h1>
      <ul>
        <li>Caja ahorro (AR$ {user.savings})</li>
        {investments.map(({ name, units, type }) => {
          return (
            <li key={name}>
              {type} {name} (AR$ {calculateValue(name, units)})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CurrentPortfolio;
