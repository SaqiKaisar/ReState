import { Star, CreditCard, Building2, Clock } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../components/ui/table";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const Wallet = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-8">Wallet</h1>

          {/* Balances Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Cash Balance */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-muted-foreground mb-2">Cash balance</h2>
                    <p className="text-3xl font-semibold">AED 0</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="default">Deposit</Button>
                    <Button variant="outline">Withdraw</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rewards Balance */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="text-muted-foreground">Rewards balance</h2>
                      <span
                        className="text-muted-foreground cursor-help"
                        title="Earn rewards on your investments"
                      >
                        ⓘ
                      </span>
                    </div>
                    <p className="text-3xl font-semibold">AED 0</p>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transactions */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Transactions</h2>
            <Card className="border-none shadow-lg">
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
                    <TableCell colSpan={5} className="text-center">
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <Clock className="mb-2 h-6 w-6" />
                        <p>No transactions yet</p>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </section>

          {/* Cards and Banks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cards Section */}
            <section>
              <h2 className="text-xl font-semibold mb-6">Cards</h2>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 text-muted-foreground mb-6">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <p>
                      Add a card to enjoy instant deposits from anywhere in the
                      world
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-dashed hover:border-primary hover:text-primary transition-colors"
                  >
                    <span className="mr-2">+</span> Add new card
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Banks Section */}
            <section>
              <h2 className="text-xl font-semibold mb-6">Banks</h2>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 text-muted-foreground mb-6">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <p>
                      Add a bank account to deposit from anywhere in the world
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-dashed hover:border-primary hover:text-primary transition-colors"
                  >
                    <span className="mr-2">+</span> Add new bank
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wallet;
