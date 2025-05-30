/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePaystackPayment } from "react-paystack";
import { PaystackConfig } from "@/types/paystack";
import { toast } from "sonner";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useCartStore } from "@/store/cart-store";

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
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentInitiated, setPaymentInitiated] = useState(false);
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
        custom_fields: [
          {
            display_name: "German Tutor",
            variable_name: "company_name",
            value: "German Tutor",
          },
          {
            display_name: "Order ID",
            variable_name: "order_id",
            value: reference,
          },
          {
            display_name: "Cart ID",
            variable_name: "cart_id",
            value: getCart()?.cartId || reference,
          },
          {
            display_name: "User ID",
            variable_name: "user_id",
            value: user?.id || "",
          },
          {
            display_name: "User Full Name",
            variable_name: "user_full_name",
            value: user?.fullName || "",
          },
          {
            display_name: "User Email",
            variable_name: "user_email",
            value: user?.primaryEmailAddress?.emailAddress || "",
          },
          {
            display_name: "Course Session ID",
            variable_name: "course_session_id",
            value: "",
          },
        ],
      },
    };
  }, [user, calculateTotalAmount, reference, getCart]);

  const paystackHookConfig = useMemo((): PaystackHookConfig => {
    const config = createPaystackConfig();
    return {
      email: config.email,
      amount: config.amount,
      currency: config.currency,
      publicKey: config.publicKey,
      reference: config.reference,
      metadata: config.metadata,
    };
  }, [createPaystackConfig]);

  const handleSuccess = useCallback(
    (reference: any) => {
      console.log("Payment success handler called");
      setIsProcessing(false);
      setPaymentInitiated(false);
      toast.success("Payment successful");
      setCartItems([]);
      router.push("/order-confirmation");
      console.log("Payment reference:", reference);
    },
    [router, setCartItems]
  );

  const handleClose = useCallback(() => {
    console.log("Payment close handler called");
    setIsProcessing(false);
    setPaymentInitiated(false);
    toast.error("Payment window closed");
  }, []);

  const initializePaymentHook = usePaystackPayment(paystackHookConfig);
  const initializePayment = initializePaymentHook as InitializePaymentFunction;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isProcessing) {
      timer = setTimeout(() => {
        console.log("Payment processing timeout - resetting state");
        setIsProcessing(false);
        setPaymentInitiated(false);
      }, 3 * 60 * 1000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isProcessing]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsProcessing(false);
      setPaymentInitiated(false);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible" && isProcessing) {
        console.warn("Visibility changed while processing payment");
        setIsProcessing(false);
        setPaymentInitiated(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isProcessing]);

  const triggerPayment = useCallback(() => {
    if (!user) {
      toast.error("Please login to proceed with payment");
      router.push("/sign-in");
      return;
    }
    if (!cartItems.length) {
      toast.error("Your cart is empty");
      return;
    }
    if (!paystackPublicKey || paystackPublicKey === fallbackPublicKey) {
      toast.error("Missing Paystack public key");
      return;
    }
    if (isProcessing || paymentInitiated) return;

    setIsProcessing(true);
    setPaymentInitiated(true);

    try {
      console.log("Initializing payment...");
      initializePayment(handleSuccess, handleClose);
    } catch (error) {
      console.error("Payment initialization error:", error);
      toast.error("Failed to initialize payment");
      setIsProcessing(false);
      setPaymentInitiated(false);
    }
  }, [
    user,
    cartItems,
    initializePayment,
    handleSuccess,
    handleClose,
    router,
    isProcessing,
    paymentInitiated,
  ]);

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
