"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../components/PropertyCard";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { mockProperties } from "./mockData";

const PropertiesPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<
    "Available" | "Funded" | "Exited"
  >("Available");

  const filteredProperties = mockProperties.filter(
    (property) => property.status === selectedStatus
  );

  // Function to handle card click and redirect to details page
  // const handleCardClick = (id: string) => {
  //   router.push(`/properties/${id}`); // Navigate to the details page
  // };

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
              <Link to={`/properties/${property.id}`} key={property.id}>
                <div className="cursor-pointer">
                  <PropertyCard
                    title={property.title}
                    location={property.location}
                    price={property.price}
                    returns={property.returns}
                    image={property.image}
                    status={property.status}
                  />
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
