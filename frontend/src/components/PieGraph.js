import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';
import PropTypes from 'prop-types';

const random = (min = 111, max = 999) => {
  let num = Math.random() * (max - min) + min;

  return Math.floor(num);
};

const PieGraph = ({ graphInvestments }) => {
  const renderLabelContent = (props) => {
    const { value, type, name, x, y, midAngle } = props;

    return (
      <g
        transform={`translate(${x}, ${y})`}
        textAnchor={midAngle < -90 || midAngle >= 90 ? 'end' : 'start'}
        width={500}
      >
        <text x={0} y={0} width={500}>
          {type} {name}
        </text>
        <text x={0} y={20}>{`AR$ ${value}`}</text>
      </g>
    );
  };

  return (
    <PieChart width={800} height={400}>
      <Pie
        data={graphInvestments}
        dataKey='value'
        cx={400}
        cy={130}
        startAngle={180}
        endAngle={-180}
        innerRadius={60}
        outerRadius={80}
        label={renderLabelContent}
        paddingAngle={5}
        isAnimationActive={false}
      >
        {graphInvestments.map((entry, index) => (
          <Cell key={`slice-${index}`} fill={`#${random()}`} />
        ))}
        <Label width={50} position='center'>
          Cartera
        </Label>
      </Pie>
    </PieChart>
  );
};

PieGraph.propTypes = {
  graphInvestments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default PieGraph;
