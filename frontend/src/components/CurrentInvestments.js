import React from 'react';

const CurrentInvestments = (props) => {
  const { user } = props;

  return (
    <div>
      <h2>Mis inversiones</h2>
      <ul>
        <li>Caja ahorro (AR$ {user.savings})</li>
        {user.investments.map(({ name, units, type }) => {
          <li style={{ cursor: 'pointer' }} key={name}>
            {type} {name} ({units} unidades)
          </li>;
        })}
      </ul>
    </div>
  );
};

export default CurrentInvestments;
