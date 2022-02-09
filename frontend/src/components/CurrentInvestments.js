import React from 'react';
import useInvestmentSelection from '../hooks/useInvestmentSelection';
import Investment from './Investment';

const CurrentInvestments = (props) => {
  const {
    user: { savings, investments },
    selectedInvest,
    setSelectedInvest,
  } = props;

  const [handleClickInvestment, isSelected] = useInvestmentSelection(
    investments,
    selectedInvest,
    setSelectedInvest
  );

  return (
    <div>
      <h2>Mis inversiones</h2>
      <ul>
        <li>Caja ahorro (AR$ {savings})</li>
        {investments.map(({ _id, name, units, type }) => (
          <Investment
            key={name}
            id={_id}
            handleClickInvestment={handleClickInvestment}
            selected={isSelected(name)}
          >
            {type} {name} ({units} unidades)
          </Investment>
        ))}
      </ul>
    </div>
  );
};

export default CurrentInvestments;
