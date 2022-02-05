import React from 'react';
import Investment from './Investment';

const OtherInvestments = (props) => {
  const { otherInvestments, selectedInvest, setSelectedInvest } = props;

  const handleClickInvestment = (id) => {
    const asset = otherInvestments.find(({ _id }) => _id === id);
    if (selectedInvest && selectedInvest.name === asset.name) {
      setSelectedInvest(null);
    } else {
      setSelectedInvest({ ...asset });
    }
  };

  const isSelected = (name) => {
    return selectedInvest && selectedInvest.name === name;
  };

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
