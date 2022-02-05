import React from 'react';

const Investment = (props) => {
  const { id, handleClickInvestment, selected, children } = props;

  const onHandleClickInvestment = () => {
    handleClickInvestment(id);
  };

  const setColor = () => {
    let style = { cursor: 'pointer' };
    if (selected) {
      style = { ...style, color: 'blue' };
    }
    return style;
  };

  return (
    <li style={setColor()} onClick={() => onHandleClickInvestment()}>
      {children}
    </li>
  );
};

export default Investment;
