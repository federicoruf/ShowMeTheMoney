import React, { useEffect, useState } from 'react';

const AssetTransaction = ({ selectedInvest }) => {
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
    console.log('click on buy');
  };

  const handleSell = async () => {
    console.log('click on sell');
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

export default AssetTransaction;
