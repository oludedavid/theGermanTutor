"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CartItemT, ChangeEvent, AcceptConditionT } from "@/types";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/cart-store";
import { useEffect, useState } from "react";
import CartLoader from "./cart-loader";

export default function CartItems({
  onClick,
  className,
  cartItems,
  acceptCondition,
  setAcceptCondition,
  isProcessing,
}: {
  className?: string;
  cartItems: CartItemT[];
  acceptCondition: AcceptConditionT;
  setAcceptCondition: (condition: AcceptConditionT) => void;
  isProcessing: boolean;
  onClick: (acceptCondition: boolean) => void;
}) {
  const {
    setCartItemQuantity,
    removeCartItem,
    getTotalPrice,
    getTotalQuantityOfItemsInCart,
  } = useCartStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cartItems.length > 0 || isLoading) {
      setIsLoading(false);
    }
  }, [cartItems, isLoading]);

  function handleQuantityChange(event: ChangeEvent, itemId: string) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setCartItemQuantity(itemId, value);
    }
  }

  const totalPrice = getTotalPrice();
  const totalItems = getTotalQuantityOfItemsInCart();

  return (
    <div className={`${className}`}>
      <div>
        <h1 className="text-xl sm:text-2xl text-[#0F0F0F] font-bold border-b pb-3">
          Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
        </h1>
        {isLoading ? (
          <CartLoader />
        ) : cartItems.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-[#525252]">Your cart is empty</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.course.id}
                className="flex flex-col gap-2 px-3 sm:px-6 border-b py-6"
              >
                <h6 className="text-sm sm:text-base font-bold text-[#0F0F0F]">
                  {item.course.title}
                </h6>
                <h3 className="text-xl sm:text-2xl font-bold text-[#910F3F]">
                  €{item.course.price.toFixed(2)} EUR
                </h3>
                <div className="flex items-center gap-4">
                  <Input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="w-16"
                    onChange={(e) => handleQuantityChange(e, item.course.id)}
                  />
                  <Button
                    variant={"ghost"}
                    className="text-sm text-[#910F3F] hover:underline bg-white"
                    onClick={() => removeCartItem(item.course.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="flex flex-row justify-between py-6">
              <p className="text-lg sm:text-xl md:text-2xl text-[#525252] font-semibold">
                Total
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl text-[#0F0F0F] font-semibold">
                €{totalPrice.toFixed(2)} EUR
              </h3>
            </div>

            {/* Checkout */}
            <div className="w-full py-4 sm:py-6">
              <Button
                onClick={() => onClick(acceptCondition)}
                variant={"default"}
                className="w-full uppercase bg-[#910F3F] py-3 sm:py-4 text-sm sm:text-base"
                disabled={
                  !acceptCondition || cartItems.length === 0 || isProcessing
                }
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Buy Now"
                )}
              </Button>
            </div>

            {/* Terms */}
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox
                id="terms"
                className="border-[#910F3F]"
                checked={acceptCondition}
                onCheckedChange={(checked) =>
                  setAcceptCondition(checked as boolean)
                }
              />
              <Label
                htmlFor="terms"
                className="text-xs sm:text-sm text-[#525252] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept the terms and conditions
              </Label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
