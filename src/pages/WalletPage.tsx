import { Star, CreditCard, Building2, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../components/ui/table";

const Wallet = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB]"> 
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Wallet</h1>

          {/* Balances Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Cash Balance */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-gray-600 mb-2">Cash balance</h2>
                  <p className="text-3xl font-semibold">AED 0</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-colors">
                    Deposit
                  </button>
                  <button className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>

            {/* Rewards Balance */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-gray-600">Rewards balance</h2>
                    <span className="text-gray-400 cursor-help" title="Earn rewards on your investments">ⓘ</span>
                  </div>
                  <p className="text-3xl font-semibold">AED 0</p>
                </div>
                <Star className="text-emerald-400" size={32} />
              </div>
            </div>
          </div>

          {/* Transactions */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Transactions</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Wallet</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="h-32">
                    <TableCell colSpan={5} className="text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center">
                        <Clock className="mb-2 text-gray-400" size={24} />
                        <p>No transactions yet</p>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Cards and Banks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cards Section */}
            <section>
              <h2 className="text-xl font-semibold mb-6">Cards</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <CreditCard size={20} />
                  <p>Add a card to enjoy instant deposits from anywhere in the world</p>
                </div>
                <button className="w-full py-3 border-2 border-dashed border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <span>+</span> Add new card
                </button>
              </div>
            </section>

            {/* Banks Section */}
            <section>
              <h2 className="text-xl font-semibold mb-6">Banks</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <Building2 size={20} />
                  <p>Add a bank account to deposit from anywhere in the world</p>
                </div>
                <button className="w-full py-3 border-2 border-dashed border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <span>+</span> Add new bank
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wallet;