"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import Logo from "@/ui/components/logo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function CustomSignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleBackToHome = () => {
    setIsLoading(true);
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center space-y-6 relative">
        {/* Back button */}
        <button
          onClick={handleBackToHome}
          className="absolute top-4 left-4 text-gray-500 hover:text-gray-700 transition-colors flex items-center text-sm"
          disabled={isLoading}
        >
          <ArrowLeft size={16} className="mr-1" />
          Back
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
            {/* Replace with your actual logo */}
            <Logo width={40} height={40} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>

        <p className="text-gray-600 text-sm max-w-xs mx-auto">
          Sign in to access your account, track your learning progress, and
          continue your educational journey.
        </p>

        {/* Auth handling */}
        <div className="py-4">
          <SignedIn>
            <div className="space-y-4">
              <div className="bg-green-50 text-green-700 p-4 rounded-lg text-sm">
                You are already signed in!
              </div>
              <button
                onClick={() => router.push("/")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Go to Dashboard
              </button>
            </div>
          </SignedIn>

          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </div>

        {/* Additional information */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Need help? Contact us at{" "}
            <span className="text-blue-600">support@example.com</span>
          </p>
        </div>
      </div>
    </main>
  );
}
