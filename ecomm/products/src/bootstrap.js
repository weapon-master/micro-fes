import faker from "faker";

const products = Array.from({ length: 3 })
  .map(() => `<div>${faker.commerce.productName()}</div>`)
  .join("\n");

export const mount = (el) => {
  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const isolatedContainer = document.querySelector(
    "#uniq-id-for-ioslate-products-env"
  );
  if (isolatedContainer) {
    mount(isolatedContainer);
  }
}
