import faker from "faker";

export const mount = (el) => {
  el.innerHTML = `You got ${faker.random.number()} products`;
};

if (process.env.NODE_ENV === "development") {
  const isolatedContainer = document.querySelector(
    "#uniq-id-for-isolate-cart-env"
  );
  isolatedContainer && mount(isolatedContainer);
}
