"use client";
import { useState } from "react";
import PageHeader from "@/ui/components/page-header";
import DeliveryInfo from "@/ui/components/delivery-info";
import PaymentMethod from "@/ui/components/payment-method";
import CartItems from "@/ui/components/cart-items";
import { DeliveryInfoT, PaymentMethodT, AcceptConditionT } from "@/types";
import { useUserStore } from "@/store/user-store";
import { useCartStore } from "@/store/cart-store";

export default function Cart() {
  const { cartItems, setCart } = useCartStore((state) => state);
  const { owner } = useUserStore((state) => state);
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfoT>({
    fullname: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    country: "",
    stateOrProvinceOrRegion: "",
    postcode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodT>({
    paymentMethod: "paypal",
  });
  const [acceptCondition, setAcceptCondition] =
    useState<AcceptConditionT>(false);

  function onBuyNow(acceptCondition: boolean) {
    if (owner) {
      setCart({
        owner: {
          userId: owner.userId,
          fullName: owner.fullName,
          email: owner.email,
        },
        ownerItems: cartItems,
        deliveryInfo: deliveryInfo,
        paymentMethod: paymentMethod,
        acceptCondition: acceptCondition,
      });
    } else {
      alert("Please login or register to order");
      window.location.href = "/";
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader />
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 lg:gap-10 py-6 lg:py-10">
        <div className="w-full lg:w-3/5 grid grid-cols-1 gap-6">
          <DeliveryInfo
            onChange={setDeliveryInfo}
            deliveryInfo={deliveryInfo}
            className="w-full shadow-md rounded-lg p-4"
          />
          <PaymentMethod
            onChange={setPaymentMethod}
            paymentMethod={paymentMethod}
            className="w-full shadow-md rounded-lg p-4"
          />
        </div>
        <CartItems
          onClick={onBuyNow}
          acceptCondition={acceptCondition}
          setAcceptCondition={setAcceptCondition}
          cartItems={cartItems}
          className="w-full lg:w-2/5 shadow-md rounded-lg p-4 h-fit sticky top-6"
        />
      </div>
    </div>
  );
}
