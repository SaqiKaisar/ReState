"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext";
import Navbar from "../src/components/Navbar";
import HomePage from "../src/pages/HomePage";
import PropertiesPage from "../src/pages/PropertiesPage";
import WalletPage from "../src/pages/WalletPage";
import PortfolioPage from "../src/pages/PortfolioPage";
import CheckoutPage from "../src/pages/CheckoutPage";
import ProfilePage from "../src/pages/ProfilePage";
import SellPage from "../src/pages/SellPage";
import ProtectedRoute from "../src/components/ProtectedRoute";
import PropertyDetailsPage from "../src/pages/PropertyDetailsPage";
import { CartProvider } from "@/src/contexts/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/properties" element={<PropertiesPage />} />
              <Route
                path="/wallet"
                element={
                  <ProtectedRoute>
                    <WalletPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <ProtectedRoute>
                    <PortfolioPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <CheckoutPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/sell" element={<SellPage />} />
              <Route path="/properties/:id" element={<PropertyDetailsPage />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
