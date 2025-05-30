/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePaystackPayment } from "react-paystack";
import { PaystackConfig } from "@/types/paystack";
import { toast } from "sonner";
import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useCartStore } from "@/store/cart-store";
import { sendReceiptEmail } from "@/lib/send-receipt";

const fallbackPublicKey = "pk_test_xxxx";
const paystackPublicKey =
  process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || fallbackPublicKey;

type PaystackHookConfig = {
  email: string;
  amount: number;
  currency: string;
  publicKey: string;
  reference: string;
  metadata?: {
    custom_fields: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
  };
};

type InitializePaymentFunction = {
  (onSuccess?: (reference: any) => void, onClose?: () => void): void;
};

export const usePaystack = () => {
  const router = useRouter();
  const { user } = useUser();
  const { cartItems, getTotalPrice, setCartItems, getCart } = useCartStore();
  const cart = getCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const reference = useMemo(() => new Date().getTime().toString(), []);

  const calculateTotalAmount = useCallback(() => {
    const totalPrice = getTotalPrice();
    return Math.round(totalPrice * 100);
  }, [getTotalPrice]);

  const createPaystackConfig = useCallback((): PaystackConfig => {
    return {
      email: user?.primaryEmailAddress?.emailAddress || "",
      amount: calculateTotalAmount(),
      currency: "NGN",
      publicKey: paystackPublicKey,
      reference: reference,
      metadata: {
        companyName: "Your Company Name",
        orderId: reference,
        cartId: cart?.cartId || reference,
        userId: user?.id || "",
        userFullName: user?.fullName || "",
        userEmail: user?.primaryEmailAddress?.emailAddress || "",
        courseSessionId: "",
      },
    };
  }, [user, calculateTotalAmount, cart, reference]);

  const onSuccess = useCallback(
    async (reference: any) => {
      setIsProcessing(false);
      toast.success("Payment successful");
      setCartItems([]);
      router.push("/order-confirmation");
      console.log("Payment reference:", reference);

      if (user?.primaryEmailAddress?.emailAddress && user?.fullName) {
        try {
          await sendReceiptEmail({
            userEmail: user.primaryEmailAddress.emailAddress,
            userFullName: user.fullName,
            orderId: reference?.reference || "N/A",
            cartId: cart?.cartId,
            totalAmount: calculateTotalAmount(),
          });
          console.log("Receipt email sent successfully");
        } catch (err) {
          console.error("Failed to send receipt email", err);
        }
      }
    },
    [router, setCartItems, user, cart, calculateTotalAmount]
  );

  const onClose = useCallback(() => {
    setIsProcessing(false);
    toast.error("Payment window closed");
  }, []);

  const paystackHookConfig = useMemo((): PaystackHookConfig => {
    const config = createPaystackConfig();

    return {
      email: config.email,
      amount: config.amount,
      currency: config.currency,
      publicKey: config.publicKey,
      reference: config.reference,
      metadata: {
        custom_fields: [
          {
            display_name: "Company Name",
            variable_name: "company_name",
            value: config.metadata?.companyName || "",
          },
          {
            display_name: "Order ID",
            variable_name: "order_id",
            value: config.metadata?.orderId || "",
          },
          {
            display_name: "Cart ID",
            variable_name: "cart_id",
            value: config.metadata?.cartId || "",
          },
          {
            display_name: "User ID",
            variable_name: "user_id",
            value: config.metadata?.userId || "",
          },
          {
            display_name: "User Full Name",
            variable_name: "user_full_name",
            value: config.metadata?.userFullName || "",
          },
          {
            display_name: "User Email",
            variable_name: "user_email",
            value: config.metadata?.userEmail || "",
          },
        ],
      },
    };
  }, [createPaystackConfig]);

  const initializePaymentHook = usePaystackPayment(paystackHookConfig);
  const initializePayment = initializePaymentHook as InitializePaymentFunction;

  const triggerPayment = useCallback(() => {
    if (!user) {
      toast.error("Please login to proceed with payment");
      router.push("/signIn");
      return;
    }

    if (!cartItems.length) {
      toast.error("Your cart is empty");
      return;
    }

    if (!paystackPublicKey) {
      toast.error("Missing Paystack public key");
      return;
    }

    setIsProcessing(true);

    try {
      initializePayment(onSuccess, onClose);
    } catch (error) {
      console.error("Payment initialization error:", error);
      toast.error("Failed to initialize payment");
      setIsProcessing(false);
    }
  }, [user, cartItems, initializePayment, onSuccess, onClose, router]);

  const paystackConfig = useMemo(
    () => createPaystackConfig(),
    [createPaystackConfig]
  );

  return {
    triggerPayment,
    isProcessing,
    paystackConfig,
  };
};
