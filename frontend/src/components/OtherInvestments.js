import React from 'react';

const OtherInvestments = (props) => {
  const { otherInvestments } = props;

  return (
    <div>
      <h2>Otras inversiones</h2>
      <ul>
        {otherInvestments.map(({ name, type, unitPrice }) => {
          return (
            <li key={name}>
              {type} {name} (AR$ {unitPrice} / unidad)
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OtherInvestments;
