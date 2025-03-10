import { create } from "zustand";
import { CartItemT, CartT } from "@/types";
import secureLocalStorage from "react-secure-storage";

interface States {
  cart: CartT | null;
  cartItems: CartItemT[];
  totalNumberOfItemsInTheCart: number;
  totalPriceOfItemsInTheCart: number;
}

interface Actions {
  setCartItems: (fetchedCartItemsFromBackend: CartItemT[]) => void;
  setCart: (cart: CartT) => void;
  getCart: () => CartT | null;
  addCartItem: (item: CartItemT) => void;
  removeCartItem: (itemId: string) => void;
  setCartItemTotalQuantity: () => void;
  setCartItemQuantity: (itemId: string, quantity: number) => void;
  setTotalPrice: () => void;
  getTotalPrice: () => number;
  getTotalQuantityOfItemsInCart: () => number;
}

export const useCartStore = create<States & Actions>((set, get) => {
  const getCartFromStorage = (): CartT | null => {
    if (typeof window === "undefined") return null;
    const cart = secureLocalStorage.getItem("cart");
    if (!cart) return null;
    try {
      return JSON.parse(cart as string) as CartT;
    } catch (error) {
      console.error("Error parsing cart data:", error);
      return null;
    }
  };

  const updateCartInStorage = (cart: CartT) => {
    secureLocalStorage.setItem("cart", JSON.stringify(cart));
  };

  const getCartItemsFromStorage = (): CartItemT[] => {
    if (typeof window === "undefined") return [];
    const cartItems = secureLocalStorage.getItem("cartItems");
    if (!cartItems) return [];
    try {
      return JSON.parse(cartItems as string) as CartItemT[];
    } catch (error) {
      console.error("Error parsing cart items data:", error);
      return [];
    }
  };

  const updateCartItemsInStorage = (cartItems: CartItemT[]) => {
    secureLocalStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const initialCartItems = getCartItemsFromStorage();

  const initialTotalPrice = initialCartItems.reduce((total, item) => {
    return total + Number(item.course?.price || 0) * (item.quantity || 0);
  }, 0);

  return {
    cart: getCartFromStorage(),
    cartItems: initialCartItems,
    totalNumberOfItemsInTheCart: initialCartItems.reduce(
      (total, item) => total + (item.quantity || 0),
      0
    ),
    totalPriceOfItemsInTheCart: initialTotalPrice,

    setCart: (cart) => {
      set({ cart });
      updateCartInStorage(cart);
    },

    getCart: () => {
      return get().cart;
    },

    setCartItems: (fetchedCartItemsFromBackend) => {
      const validCartItems = fetchedCartItemsFromBackend.filter(
        (item) => item && item.course && item.course.id
      );

      set(() => {
        updateCartItemsInStorage(validCartItems);
        return { cartItems: validCartItems };
      });
      get().setCartItemTotalQuantity();
      get().setTotalPrice();
    },

    addCartItem: (item) => {
      if (!item.course || !item.course.id) {
        console.error("Course data is missing or invalid for cart item");
        return;
      }

      set((previousState) => {
        const existingItem = previousState.cartItems.find(
          (cartItem) => cartItem.course?.id === item.course.id
        );

        let updatedCart;

        if (existingItem) {
          updatedCart = previousState.cartItems.map((cartItem) =>
            cartItem.course?.id === item.course.id
              ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
              : cartItem
          );
        } else {
          const newItem = {
            course: item.course,
            quantity: Math.max(1, item.quantity || 1),
          };
          updatedCart = [...previousState.cartItems, newItem];
        }

        updateCartItemsInStorage(updatedCart);
        return { cartItems: updatedCart };
      });

      get().setCartItemTotalQuantity();
      get().setTotalPrice();
    },

    removeCartItem: (itemId) => {
      if (!itemId) {
        console.error("No item ID provided for removal");
        return;
      }

      set((previousState) => {
        const updatedCart = previousState.cartItems.filter(
          (cartItem) => cartItem.course?.id !== itemId
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
          (total, item) => total + (item.quantity || 0),
          0
        );
        return { totalNumberOfItemsInTheCart: totalItems };
      });
    },

    setCartItemQuantity: (itemId, quantity) => {
      if (!itemId) {
        console.error("No item ID provided for quantity update");
        return;
      }

      // Ensure quantity is positive
      const validQuantity = Math.max(0, Number(quantity) || 0);

      set((previousState) => {
        const updatedCart = previousState.cartItems.map((cartItem) =>
          cartItem.course?.id === itemId
            ? { ...cartItem, quantity: validQuantity }
            : cartItem
        );
        const filteredCart =
          validQuantity === 0
            ? updatedCart.filter((item) => item.course?.id !== itemId)
            : updatedCart;

        updateCartItemsInStorage(filteredCart);
        return { cartItems: filteredCart };
      });

      get().setCartItemTotalQuantity();
      get().setTotalPrice();
    },

    setTotalPrice: () => {
      set((previousState) => {
        const totalPrice = previousState.cartItems.reduce((total, item) => {
          const price = Number(item.course?.price || 0);
          const quantity = item.quantity || 0;
          return total + price * quantity;
        }, 0);
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
