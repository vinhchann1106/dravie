// hooks/useCart.ts
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Course } from "@/types/course";

interface CartState {
  cart: Course[];
  handleAdd: (course: Course) => void;
  handleRemove: (id: string) => void;
  clearCart: () => void;
}

const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      handleAdd: (course) => {
        const { cart } = get();
        const alreadyExists = cart.some((c) => c.id === course.id);
        if (!alreadyExists) {
          set({ cart: [...cart, course] });
        }
      },

      handleRemove: (id) => {
        const { cart } = get();
        set({ cart: cart.filter((c) => c.id !== id) });
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // Lưu localStorage
    }
  )
);

export default useCart;
