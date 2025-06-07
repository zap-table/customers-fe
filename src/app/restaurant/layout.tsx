import { Button } from "@/components/ui/button";
import { CartProvider } from "@/providers/cart-provider";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CustomerLayoutProps {
  children: React.ReactNode;
}

export default function CustomerLayout({ children }: CustomerLayoutProps) {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-svh">
        {/** TODO: Extract this to CustomerHeader  */}
        <header className="sticky top-0 z-10 backdrop-blur-md border-b w-full">
          <div className="container flex h-14 items-center justify-between mx-auto">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/" className="justify-start">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="text-lg font-semibold">Demo Restaurant</h1>

            <Button variant="ghost" size="icon" asChild>
              {/** TODO: Add link to cart */}
              <Link href="/cart" className="justify-end">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>
        </header>

        <main className="w-full flex-1">
          <>{children}</>
        </main>

        {/** TODO: Extract this to Customer Navbar */}
        <nav className="sticky bottom-0 border-t bg-background/80 backdrop-blur-md">
          <div className="container flex justify-around py-2 mx-auto">
            <Button variant="ghost" className="flex-1" asChild>
              <Link href="/demo-restaurant">Menu</Link>
            </Button>

            {/*
            <Button variant="ghost" className="flex-1" asChild>
              <Link href="/demo-restaurant/cart">Cart</Link>
            </Button>
            <Button variant="ghost" className="flex-1" asChild>
              <Link href="/demo-restaurant/orders">Orders</Link>
            </Button>
            */}
          </div>
        </nav>
      </div>
    </CartProvider>
  );
}
