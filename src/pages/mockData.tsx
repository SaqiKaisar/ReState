interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  returns: number;
  image: string;
  status: "Available" | "Funded" | "Exited";
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Condo in Manhattan",
    location: "New York, NY",
    price: 950000,
    returns: 7.5,
    image: "https://via.placeholder.com/300",
    status: "Available",
  },
  {
    id: "2",
    title: "Beachfront Villa in Malibu",
    location: "Malibu, CA",
    price: 2500000,
    returns: 9.2,
    image: "https://via.placeholder.com/300",
    status: "Available",
  },
  {
    id: "3",
    title: "Downtown Loft with Skyline View",
    location: "San Francisco, CA",
    price: 1350000,
    returns: 6.8,
    image: "https://via.placeholder.com/300",
    status: "Available",
  },
  {
    id: "4",
    title: "Modern Townhouse in Chicago",
    location: "Chicago, IL",
    price: 800000,
    returns: 8.1,
    image: "https://via.placeholder.com/300",
    status: "Available",
  },
  {
    id: "5",
    title: "Cozy Cabin in the Mountains",
    location: "Denver, CO",
    price: 450000,
    returns: 7.0,
    image: "https://via.placeholder.com/300",
    status: "Funded",
  },
  {
    id: "6",
    title: "Historic Brownstone in Boston",
    location: "Boston, MA",
    price: 1100000,
    returns: 6.5,
    image: "https://via.placeholder.com/300",
    status: "Available",
  },
  {
    id: "7",
    title: "Penthouse Apartment in Miami",
    location: "Miami, FL",
    price: 1750000,
    returns: 8.7,
    image: "https://via.placeholder.com/300",
    status: "Available",
  },
  {
    id: "8",
    title: "Suburban Family Home",
    location: "Austin, TX",
    price: 600000,
    returns: 7.3,
    image: "https://via.placeholder.com/300",
    status: "Funded",
  },
  {
    id: "9",
    title: "Luxury Ranch Estate",
    location: "Dallas, TX",
    price: 3200000,
    returns: 9.0,
    image: "https://via.placeholder.com/300",
    status: "Available",
  },
  {
    id: "10",
    title: "Minimalist Studio Apartment",
    location: "Seattle, WA",
    price: 500000,
    returns: 6.2,
    image: "https://via.placeholder.com/300",
    status: "Exited",
  },
];
