"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { ShoppingCart, Wallet, User } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, signInWithGoogle, logout } = useAuth()
  const navigate = useNavigate()

  const handleAuth = async () => {
    if (user) {
      await logout()
      navigate("/")
    } else {
      await signInWithGoogle()
    }
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex-shrink-0">
              <img src="/logo.svg" alt="Stake" className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:space-x-10">
              <Link to="/properties" className="text-white hover:text-gray-300 text-base font-semibold">
                Investments
              </Link>
              <Link to="/sell" className="text-white hover:text-gray-300 text-base font-semibold">
                Sell
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <select className="bg-transparent border-none text-white text-base font-medium">
              <option value="en" className="text-black">English</option>
              <option value="ar" className="text-black">العربية</option>
            </select>

            {user ? (
              <>
                <Link to="/wallet" className="relative group text-white hover:text-gray-300">
                  <Wallet className="h-6 w-6" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-8 z-50 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded px-2 py-1 transition-all duration-300">
                    Wallet
                  </span>
                </Link>

                <Link to="/portfolio" className="relative group text-white hover:text-gray-300">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span className="absolute left-1/2 -translate-x-1/2 top-8 z-50 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded px-2 py-1 transition-all duration-300">
                    Portfolio
                  </span>
                </Link>

                <Link to="/checkout" className="relative group text-white hover:text-gray-300">
                  <ShoppingCart className="h-6 w-6" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-8 z-50 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded px-2 py-1 transition-all duration-300">
                    Cart
                  </span>
                </Link>

                <Link to="/profile" className="relative group text-white hover:text-gray-300">
                  <User className="h-6 w-6" />
                  <span className="absolute left-1/2 -translate-x-1/2 top-8 z-50 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded px-2 py-1 transition-all duration-300">
                    Profile
                  </span>
                </Link>

                <button
                  onClick={handleAuth}
                  className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-base font-semibold hover:bg-gray-300"
                >
                  Sign out
                </button>
              </>
            ) : (
              <button
                onClick={handleAuth}
                className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-base font-semibold hover:bg-gray-300"
              >
                Sign in with Google
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
