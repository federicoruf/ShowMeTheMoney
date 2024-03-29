import React, { useEffect, useState } from 'react';
import { removeUserInvestment, updateUserInvestment } from '../api/users';
import PropTypes from 'prop-types';

const AssetTransaction = ({
  user,
  setUser,
  selectedInvest,
  setSelectedInvest,
}) => {
  const { name, units = 0, type, unitPrice } = selectedInvest;
  const [sell, setSell] = useState(0);
  const [buy, setBuy] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedInvest.units) {
      setSell(selectedInvest.units);
    } else {
      setSell(0);
    }
    setBuy(0);
  }, [selectedInvest]);

  const handleBuy = async () => {
    const { _id, savings } = user;
    const newSavings = savings - unitPrice * buy;
    if (newSavings < 0) {
      setError(
        'El saldo en su caja de ahorros es insuficiente para efectuar la compra'
      );
    } else {
      setError('');
      const newUnits = units + +buy;
      const result = await updateUserInvestment(
        _id,
        name,
        newUnits,
        type,
        newSavings
      );
      setUser(result);
      setBuy(0);
      setSelectedInvest(null);
    }
  };

  const handleSell = async () => {
    if (sell > units) {
      setError('No se pueden vender mas unidades de las que se tienen');
    } else {
      setError('');
      const { _id, savings } = user;
      const newUnits = units - +sell;
      let result;
      const newSavings = savings + selectedInvest.unitPrice * +sell;
      if (newUnits === 0) {
        result = await removeUserInvestment(_id, name, newSavings);
      } else {
        result = await updateUserInvestment(
          _id,
          name,
          newUnits,
          type,
          newSavings
        );
      }
      setUser(result);
      setSell(0);
      setSelectedInvest(null);
    }
  };

  return (
    <div>
      <h1>
        {type} {name}
      </h1>
      <h2>Valores</h2>
      <p>Cantidad: {units} unidades</p>
      <p>Cotización: AR$ {unitPrice} / unidades</p>
      <p>Valor actual: AR$ {unitPrice * units}</p>
      <div>{error && <div style={{ color: 'red' }}>{error}</div>}</div>
      <div>
        <input
          type='number'
          value={buy}
          onChange={(e) => setBuy(e.target.value)}
        />
        = AR$ {unitPrice * buy}
        <button onClick={handleBuy} disabled={+buy === 0}>
          Comprar
        </button>
      </div>
      <div>
        <input
          type='number'
          value={sell}
          onChange={(e) => setSell(e.target.value)}
        />
        = AR$ {unitPrice * sell}
        <button onClick={handleSell} disabled={+sell === 0}>
          Vender
        </button>
      </div>
    </div>
  );
};

AssetTransaction.propTypes = {
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
    _id: PropTypes.string.isRequired,
  }),
  setSelectedInvest: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default AssetTransaction;
