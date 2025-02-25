"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";
import { cn } from "../../lib/utils";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  returns: number;
  image: string;
  status: "Available" | "Funded" | "Exited";
}

const mockProperties: Property[] = [
  {
    id: "1",
    title: "Boulevard Point",
    location: "Downtown Dubai",
    price: 1305990,
    returns: 10.4,
    image: "/placeholder.svg?height=200&width=300",
    status: "Available",
  },
  {
    id: "2",
    title: "Marina Tower",
    location: "Dubai Marina",
    price: 2000000,
    returns: 8.5,
    image: "/placeholder.svg?height=200&width=300",
    status: "Available",
  },
  {
    id: "3",
    title: "Palm Jumeirah Villa",
    location: "Palm Jumeirah",
    price: 7500000,
    returns: 7.2,
    image: "/placeholder.svg?height=200&width=300",
    status: "Available",
  },
  {
    id: "4",
    title: "Burj Vista",
    location: "Downtown Dubai",
    price: 3200000,
    returns: 9.1,
    image: "/placeholder.svg?height=200&width=300",
    status: "Available",
  },
  {
    id: "5",
    title: "Jumeirah Beach Residence",
    location: "JBR",
    price: 2800000,
    returns: 8.8,
    image: "/placeholder.svg?height=200&width=300",
    status: "Funded",
  },
  {
    id: "6",
    title: "Dubai Hills Estate",
    location: "Dubai Hills",
    price: 5400000,
    returns: 7.5,
    image: "/placeholder.svg?height=200&width=300",
    status: "Available",
  },
  {
    id: "7",
    title: "The Address Sky View",
    location: "Downtown Dubai",
    price: 4800000,
    returns: 9.0,
    image: "/placeholder.svg?height=200&width=300",
    status: "Available",
  },
  {
    id: "8",
    title: "Bluewaters Residences",
    location: "Bluewaters Island",
    price: 6500000,
    returns: 8.2,
    image: "/placeholder.svg?height=200&width=300",
    status: "Available",
  },
  {
    id: "9",
    title: "Arabian Ranches Villa",
    location: "Arabian Ranches",
    price: 4300000,
    returns: 7.9,
    image: "/placeholder.svg?height=200&width=300",
    status: "Available",
  },
  {
    id: "10",
    title: "Meydan One Tower",
    location: "Meydan",
    price: 3500000,
    returns: 8.7,
    image: "/placeholder.svg?height=200&width=300",
    status: "Funded",
  },
  {
    id: "11",
    title: "Emaar Beachfront",
    location: "Emaar Beachfront",
    price: 5900000,
    returns: 7.6,
    image: "/placeholder.svg?height=200&width=300",
    status: "Available",
  },
  {
    id: "12",
    title: "Al Habtoor City Apartment",
    location: "Business Bay",
    price: 3100000,
    returns: 8.3,
    image: "/placeholder.svg?height=200&width=300",
    status: "Available",
  },
];

const PropertiesPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<
    "Available" | "Funded" | "Exited"
  >("Available");

  const filteredProperties = mockProperties.filter(
    (property) => property.status === selectedStatus
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6">
        <nav className="space-y-2">
          {["Available", "Funded", "Exited"].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status as typeof selectedStatus)}
              className={cn(
                "w-full text-left px-4 py-2 rounded-lg text-sm transition-colors",
                selectedStatus === status
                  ? "text-[#00E5BE] bg-[#E7FAF6] font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              {status}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                returns={property.returns}
                image={property.image}
                status={property.status}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
