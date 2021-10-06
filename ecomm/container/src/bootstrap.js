import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartIndex";

mountProducts(document.querySelector("#dev-products"));
mountCart(document.querySelector("#dev-cart"));
