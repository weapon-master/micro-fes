import faker from 'faker';

const products = Array.from({ length: 3 }).map(
  () => `<div>${faker.commerce.productName}</div>`,
);

console.log(products);
