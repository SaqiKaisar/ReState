"use client";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { Heart, Star, Info } from "lucide-react";
import Image from "next/image";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { toast } from "../components/ui/use-toast";
import { mockProperties } from "./mockData"; // Assuming you have mock data

type PropertyDetailsProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  location: string;
  propertyType: string;
  image: string;
};

const PropertyDetailsPage = () => {
  // Get the property id from the URL
  const { id } = useParams();

  // Find the property with the given id
  const property = mockProperties.find((p) => p.id === id);

  // If the property doesn't exist, show a "not found" message
  if (!property) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Property not found</h1>
      </div>
    );
  }

  // The PropertyDetails component accepts the property data as props
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <PropertyDetails {...property} />
    </div>
  );
};

const PropertyDetails = ({
  id,
  name,
  description,
  price,
  location,
  propertyType,
  image,
}: PropertyDetailsProps) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState("1");

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      quantity: Number.parseInt(quantity),
      image,
      propertyType,
      location,
    });

    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start order-2 md:order-1">
        <div className="hidden md:flex items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl">{name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <Star className="w-5 h-5 fill-primary" />
                <Star className="w-5 h-5 fill-primary" />
                <Star className="w-5 h-5 fill-primary" />
                <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
          <div className="text-4xl font-bold ml-auto">AED {price}</div>
        </div>

        <form className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-base">
              Quantity
            </Label>
            <Select value={quantity} onValueChange={setQuantity}>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" onClick={handleAddToCart}>
              Add to cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="w-4 h-4 mr-2" />
              Add to wishlist
            </Button>
          </div>
        </form>

        {/* Property Details */}
        <Card className="border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium">Property Details</span>
              </div>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Location</span>
                  <span>{location}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Property Type</span>
                  <span>{propertyType}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 items-start order-1">
        <div className="flex md:hidden items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-2xl sm:text-3xl">{name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <Star className="w-5 h-5 fill-primary" />
                <Star className="w-5 h-5 fill-primary" />
                <Star className="w-5 h-5 fill-primary" />
                <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="text-4xl font-bold ml-auto">AED {price}</div>
        </div>

        <div className="grid gap-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={600}
            height={600}
            className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
