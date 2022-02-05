import React from 'react';

const CurrentInvestments = (props) => {
  const {
    user: { savings, investments },
  } = props;

  return (
    <div>
      <h2>Mis inversiones</h2>
      <ul>
        <li>Caja ahorro (AR$ {savings})</li>
        {investments.map(({ name, units, type }) => (
          <li style={{ cursor: 'pointer' }} key={name}>
            {type} {name} ({units} unidades)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrentInvestments;
