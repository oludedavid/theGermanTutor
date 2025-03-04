import { create } from "zustand";
import { CartItemT } from "@/types";
import secureLocalStorage from "react-secure-storage";

interface States {
  cartItems: CartItemT[];
  totalNumberOfItemsInTheCart: number;
  totalPriceOfItemsInTheCart: number;
}

interface Actions {
  setCartItems: (fetchedCartItemsFromBackend: CartItemT[]) => void;
  addCartItem: (item: CartItemT) => void;
  removeCartItem: (itemId: string) => void;
  setCartItemTotalQuantity: () => void;
  setCartItemQuantity: (itemId: string, quantity: number) => void;
  setTotalPrice: () => void;
  getTotalPrice: () => number;
  getTotalQuantityOfItemsInCart: () => number;
}

export const useCartStore = create<States & Actions>((set, get) => {
  const getCartItemsFromStorage = (): CartItemT[] => {
    if (typeof window === "undefined") return [];
    const cartItems = secureLocalStorage.getItem("cartItems");
    if (!cartItems) return [];
    try {
      return JSON.parse(cartItems as string) as CartItemT[];
    } catch (error) {
      console.error("Error parsing cart data:", error);
      return [];
    }
  };

  const updateCartItemsInStorage = (cartItems: CartItemT[]) => {
    secureLocalStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const initialCartItems = getCartItemsFromStorage();

  const initialTotalPrice = initialCartItems.reduce((total, item) => {
    return total + Number(item.course?.price || 0) * item.quantity;
  }, 0);

  return {
    cartItems: initialCartItems,
    totalNumberOfItemsInTheCart: initialCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    ),
    totalPriceOfItemsInTheCart: initialTotalPrice,

    setCartItems: (fetchedCartItemsFromBackend) => {
      set(() => {
        updateCartItemsInStorage(fetchedCartItemsFromBackend);
        return { cartItems: fetchedCartItemsFromBackend };
      });
      get().setCartItemTotalQuantity();
      get().setTotalPrice();
    },

    addCartItem: (item) => {
      if (!item.course) {
        console.error("Course data is missing for cart item");
        return;
      }

      set((previousState) => {
        const existingItem = previousState.cartItems.find(
          (cartItem) => cartItem.course.id === item.course.id
        );

        let updatedCart;

        if (existingItem) {
          updatedCart = previousState.cartItems.map((cartItem) =>
            cartItem.course.id === item.course.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          updatedCart = [
            ...previousState.cartItems,
            { course: item.course, quantity: 1 },
          ];
        }

        updateCartItemsInStorage(updatedCart);
        return { cartItems: updatedCart };
      });

      get().setCartItemTotalQuantity();
      get().setTotalPrice();
    },

    removeCartItem: (itemId) => {
      set((previousState) => {
        const updatedCart = previousState.cartItems.filter(
          (cartItem) => cartItem.course.id !== itemId
        );
        updateCartItemsInStorage(updatedCart);
        return { cartItems: updatedCart };
      });

      get().setCartItemTotalQuantity();
      get().setTotalPrice();
    },

    setCartItemTotalQuantity: () => {
      set((previousState) => {
        const totalItems = previousState.cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        return { totalNumberOfItemsInTheCart: totalItems };
      });
    },

    setCartItemQuantity: (itemId, quantity) => {
      set((previousState) => {
        const updatedCart = previousState.cartItems.map((cartItem) =>
          cartItem.course.id === itemId
            ? { ...cartItem, quantity: Number(quantity) }
            : cartItem
        );
        updateCartItemsInStorage(updatedCart);
        return { cartItems: updatedCart };
      });

      get().setCartItemTotalQuantity();
      get().setTotalPrice();
    },

    setTotalPrice: () => {
      set((previousState) => {
        const totalPrice = previousState.cartItems.reduce(
          (total, item) =>
            total + Number(item.course?.price || 0) * item.quantity,
          0
        );
        return { totalPriceOfItemsInTheCart: totalPrice };
      });
    },

    getTotalPrice: () => {
      return get().totalPriceOfItemsInTheCart;
    },

    getTotalQuantityOfItemsInCart: () => {
      return get().totalNumberOfItemsInTheCart;
    },
  };
});
