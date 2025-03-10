import type { Metadata } from "next";
import Navbar from "@/ui/components/navbar";
import Footer from "@/ui/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "German Tutor",
  description: "The German Tutor Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={{
        signIn: {
          start: {
            title: "Login to your account",
            subtitle: "to continue to the platform",
            actionText: "Login",
          },
        },
      }}
    >
      <html lang="en">
        <body
          className={`grid grid-cols-1 gap-4 min-w-screen antialiased`}
          suppressHydrationWarning
        >
          <>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
        </body>
      </html>
    </ClerkProvider>
  );
}
