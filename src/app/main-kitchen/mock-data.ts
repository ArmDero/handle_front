import uuidv1 from 'uuid/v1';

const generateOrderType = (title, ready) => ({
  title,
  orders: [
    {
      id: uuidv1(),
      name: 'Seafood Laksa',
      ready,
      done: false,
      timer: ready ? null : 0,
      needTiming: ready ? false : true,
      subOrders: [
        {
          name: 'Medium Rare',
          id: uuidv1()
        },
        {
          name: 'Red Wine Jus',
          id: uuidv1()
        }
      ]
    },
    {
      id: uuidv1(),
      name: 'Trio of Dips',
      ready,
      timer: ready ? null : 0
    }
  ]
});

const generateOrder = ({ name, type }) => ({
  id: uuidv1(),
  name,
  type,
  time: '00:00am',
  customer: {
    count: 2,
    name: 'Claire',
    timer: '00:33'
  },
  orderTypes: [
    generateOrderType('Entree', true),
    generateOrderType('Main', false),
    generateOrderType('Dessert', true)
  ]
});

const promise = new Promise((resolve, reject) => {
  const data = [];

  const mock = [
    generateOrder({
      name: 'Table: 07',
      type: 'restaurant'
    }),
    generateOrder({
      name: 'Pick Up',
      type: 'takeaway'
    }),
    generateOrder({
      name: 'UberEats',
      type: 'delivery'
    })
  ];

  for (let i = 0; i < 5; i++) {
    const index = Math.round(Math.random() * 2);
    data.push(mock[index]);
  }

  resolve(data);
});

export default promise;
