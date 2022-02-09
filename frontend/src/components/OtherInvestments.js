import React from 'react';
import useInvestmentSelection from '../hooks/useInvestmentSelection';
import Investment from './Investment';

const OtherInvestments = (props) => {
  const { otherInvestments, selectedInvest, setSelectedInvest } = props;

  const [handleClickInvestment, isSelected] = useInvestmentSelection(
    otherInvestments,
    selectedInvest,
    setSelectedInvest
  );

  return (
    <div>
      <h2>Otras inversiones</h2>
      <ul>
        {otherInvestments.map(({ _id, name, type, unitPrice }) => {
          return (
            <Investment
              key={name}
              id={_id}
              handleClickInvestment={handleClickInvestment}
              selected={isSelected(name)}
            >
              {type} {name} (AR$ {unitPrice} / unidad)
            </Investment>
          );
        })}
      </ul>
    </div>
  );
};

export default OtherInvestments;
