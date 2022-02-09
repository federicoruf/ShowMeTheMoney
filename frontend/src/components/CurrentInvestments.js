import React from 'react';
import useInvestmentSelection from '../hooks/useInvestmentSelection';
import Investment from './Investment';
import PropTypes from 'prop-types';

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

CurrentInvestments.propTypes = {
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
  selectedInvest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    units: PropTypes.number,
    unitPrice: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  setSelectedInvest: PropTypes.func.isRequired,
};

export default CurrentInvestments;
