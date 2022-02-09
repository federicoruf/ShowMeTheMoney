import React, { useEffect, useState } from 'react';
import PieGraph from './PieGraph';
import PropTypes from 'prop-types';

const CurrentPortfolio = ({ user, allInvestments }) => {
  const { savings, investments } = user;
  const [total, setTotal] = useState(0);
  const [graphInvestments, setGraphInvestments] = useState([]);

  useEffect(() => {
    if (user && allInvestments && total === 0) {
      let totalAssets = savings;

      setGraphInvestments([
        ...graphInvestments,
        { name: 'Caja de ahorro', type: '', value: savings },
      ]);

      investments.forEach(({ name, type, units }) => {
        const data = allInvestments.get(name);
        const assetPrice = data.unitPrice * units;
        setGraphInvestments((oldArray) => [
          ...oldArray,
          { name, type, value: assetPrice },
        ]);
        totalAssets = totalAssets + assetPrice;
      });
      setTotal(total + totalAssets);
    }
  }, [user, allInvestments, total]);

  if (!user || !allInvestments || !total) {
    return <></>;
  }

  return (
    <div>
      <h1>Valor total cartera: AR$ {total}</h1>
      <PieGraph graphInvestments={graphInvestments} />
    </div>
  );
};

CurrentPortfolio.propTypes = {
  user: PropTypes.shape({
    investments: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        units: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
      })
    ),
    name: PropTypes.string.isRequired,
    savings: PropTypes.number.isRequired,
  }),
  allInvestments: PropTypes.instanceOf(Map).isRequired,
};

export default CurrentPortfolio;
