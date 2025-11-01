// lib/cartHelpers.ts
import { Course } from "@/types/course";

const CART_KEY = "course_cart";

export function getCart(): Course[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveCart(cart: Course[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(course: Course) {
  const cart = getCart();
  const exists = cart.some((item) => item.id === course.id);
  if (!exists) {
    cart.push(course);
    saveCart(cart);
  }
  return cart;
}

export function removeFromCart(courseId: string) {
  const cart = getCart().filter((item) => item.id !== courseId);
  saveCart(cart);
  return cart;
}

export function clearCart() {
  saveCart([]);
}

export function isInCart(courseId: string) {
  return getCart().some((item) => item.id === courseId);
}
