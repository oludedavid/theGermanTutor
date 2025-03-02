"use client";
import PageHeader from "@/ui/components/page-header";
import DeliveryInfo from "@/ui/components/delivery-info";
import PaymentMethod from "@/ui/components/payment-method";
import CartItems from "@/ui/components/cart-items";

export default function Cart() {
  return (
    <div className="w-full flex flex-col items-center">
      <PageHeader />
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 lg:gap-10 py-6 lg:py-10">
        <div className="w-full lg:w-3/5 grid grid-cols-1 gap-6">
          <DeliveryInfo className="w-full shadow-md rounded-lg p-4" />
          <PaymentMethod className="w-full shadow-md rounded-lg p-4" />
        </div>
        <CartItems className="w-full lg:w-2/5 shadow-md rounded-lg p-4 h-fit sticky top-6" />
      </div>
    </div>
  );
}
