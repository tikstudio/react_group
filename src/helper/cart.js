import Emitter from "./Emitter";
import data from "../data";

export function addProduct(prodId, qty = 1) {
  const cart = getCart();
  if (!cart[prodId]) {
    cart[prodId] = 0
  }
  cart[prodId] += parseInt(qty);
  saveCart(cart);
  Emitter.call('UPDATE_CART')
}

export function setProduct(prodId, qty) {
  const cart = getCart();
  cart[prodId] = parseInt(qty);
  saveCart(cart);
  Emitter.call('UPDATE_CART')
}

export function removeProduct(prodId) {
  const cart = getCart();
  if (!cart[prodId]) {
    delete cart[prodId]
  }
  saveCart(cart);
  Emitter.call('UPDATE_CART')
}

export function getCart() {
  const data = localStorage.getItem('cart')
  try {
    const cart = JSON.parse(data)
    return cart || {}
  } catch (e) {
    return {}
  }
}

export function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function getTotalProducts() {
  const cart = getCart();
  let total = 0;
  Object.values(cart).forEach((qty) => {
    total += qty;
  });
  return total;
}

export function getTotal() {
  const cart = getCart();
  let total = 0;
  const {products} = data
  Object.entries(cart).forEach(([prodId, qty]) => {
    const product = products.find((p) => String(p.id) === String(prodId))
    if (product) {
      total += (product.price * qty)
    }
  });
  return parseFloat(total.toFixed(2));
}

export function showCartModal() {
  Emitter.call('SHOW_CART_MODAL')
}