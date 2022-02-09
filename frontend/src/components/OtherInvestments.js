import React from 'react';
import useInvestmentSelection from '../hooks/useInvestmentSelection';
import Investment from './Investment';
import PropTypes from 'prop-types';

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

OtherInvestments.propTypes = {
  otherInvestments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      unitPrice: PropTypes.number.isRequired,
    })
  ),
  selectedInvest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    units: PropTypes.number,
    unitPrice: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  setSelectedInvest: PropTypes.func.isRequired,
};

export default OtherInvestments;
