import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OrderConfirmation() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-10">
      <CheckCircle size={64} className="text-green-600 mb-4" />
      <h1 className="text-2xl md:text-4xl font-semibold mb-2">
        Payment Successful!
      </h1>
      <p className="text-muted-foreground max-w-md mb-6">
        Thank you for your order. We have sent you a confirmation email with the
        details of your purchase.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="default">
          <Link href="/courses">Continue Learning</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </main>
  );
}
