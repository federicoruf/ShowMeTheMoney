import React from 'react';
import PropTypes from 'prop-types';

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

Investment.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  selected: PropTypes.bool,
  id: PropTypes.string.isRequired,
  handleClickInvestment: PropTypes.func.isRequired,
};

export default Investment;
