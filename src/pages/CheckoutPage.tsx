"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/seperator";
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  const isEmpty = state.items.length === 0;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg">
                {isEmpty ? (
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">
                        Your cart is empty
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Looks like you have not added anything to your cart yet
                      </p>
                      <Button>Start Shopping</Button>
                    </div>
                  </CardContent>
                ) : (
                  <>
                    <CardHeader>
                      <CardTitle>Cart Items</CardTitle>
                    </CardHeader>
                    <CardContent className="divide-y">
                      {state.items.map((item) => (
                        <div
                          key={item.id}
                          className="py-6 first:pt-0 last:pb-0"
                        >
                          <div className="flex gap-6">
                            {/* Product Image */}
                            <div className="relative h-24 w-24 rounded-lg overflow-hidden bg-gray-100">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="object-cover"
                              />
                            </div>

                            {/* Product Details */}
                            <div className="flex flex-1 flex-col">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="font-medium">{item.name}</h3>
                                  <p className="mt-1 text-sm text-muted-foreground">
                                    SKU: {item.id}
                                  </p>
                                </div>
                                <p className="font-medium">AED {item.price}</p>
                              </div>

                              <div className="flex items-center justify-between mt-4">
                                {/* Quantity Controls */}
                                <div className="flex items-center gap-3">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                  >
                                    <Minus className="h-4 w-4" />
                                  </Button>
                                  <span className="w-12 text-center">
                                    {item.quantity}
                                  </span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>
                                </div>

                                <Button
                                  variant="ghost"
                                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                  onClick={() => removeItem(item.id)}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </>
                )}
              </Card>
            </div>

            {/* Order Summary */}
            {!isEmpty && (
              <div className="lg:col-span-1">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>AED {state.total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">VAT (5%)</span>
                      <span>AED {state.total * 0.05}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>AED {state.total * 1.05}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Proceed to Checkout</Button>
                  </CardFooter>
                </Card>

                {/* Additional Information */}
                <Card className="border-none shadow-lg mt-6">
                  <CardContent className="pt-6">
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <p>• Free shipping on orders over AED 500</p>
                      <p>• Estimated delivery: 3-5 business days</p>
                      <p>• 30-day return policy</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
