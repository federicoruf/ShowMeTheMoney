exports.INVESTMENT_DATA = [
  {
    name: 'Coca Cola',
    type: 'Acciones',
    unitPrice: '100',
  },
  {
    name: 'Amazon',
    type: 'Acciones',
    unitPrice: '200',
  },
  {
    name: 'Apple',
    type: 'Acciones',
    unitPrice: '400',
  },
  {
    name: 'A42',
    type: 'Bonos',
    unitPrice: '10',
  },
  {
    name: 'B22',
    type: 'Bonos',
    unitPrice: '50',
  },
  {
    name: 'C12',
    type: 'Bonos',
    unitPrice: '50',
  },
];

exports.USERS_DATA = [
  {
    name: 'Mark',
    savings: 10000,
    investments: [
      {
        name: 'Apple',
        units: 10,
        type: 'Acciones',
      },
      {
        name: 'B22',
        units: 5,
        type: 'Bonos',
      },
    ],
  },
  {
    name: 'John',
    savings: 20000,
    investments: [
      {
        name: 'Amazon',
        units: 20,
        type: 'Acciones',
      },
      {
        name: 'C12',
        units: 15,
        type: 'Bonos',
      },
    ],
  },
];
