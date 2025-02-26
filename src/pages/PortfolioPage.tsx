import { Info, Home, Calendar, TrendingUp, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

export default function PortfolioDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Portfolio Value */}
        <Card className="border-none shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              Portfolio Value
              <Info className="h-4 w-4" />
            </div>
            <h1 className="text-4xl font-bold">AED 0</h1>
          </CardContent>
        </Card>

        {/* Key Financials */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    Monthly Income <Info className="h-4 w-4" />
                  </div>
                  <p className="text-2xl font-semibold">AED 0</p>
                  <p className="text-sm text-muted-foreground">Jan 2025</p>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    Total Rental Income <Info className="h-4 w-4" />
                  </div>
                  <p className="text-2xl font-semibold">AED 0</p>
                  <p className="text-sm text-muted-foreground">
                    as of Jan 2025
                  </p>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <Home className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    Total Appreciation <Info className="h-4 w-4" />
                  </div>
                  <p className="text-2xl font-semibold">AED 0</p>
                  <p className="text-sm text-muted-foreground">
                    as of Jan 2025
                  </p>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Insights & Investment Limit */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">Properties</h3>
                <p className="text-3xl font-bold">0</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">Occupancy Rate</h3>
                <p className="text-3xl font-bold">0%</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-2">Annual Yield</h3>
                <p className="text-3xl font-bold">0%</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Annual Investment Limit <Info className="h-4 w-4" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={0} className="h-2 mb-4" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Annual limit</span>
                  <span className="font-medium">AED 367,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Invested in the last 12 months</span>
                  <span className="font-medium">AED 0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Available to invest</span>
                  <span className="font-medium">AED 367,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stakes Table */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>My Stakes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Property</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Investment Value</TableHead>
                  <TableHead>Total Rental Income</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-10">
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                      <Clock className="h-10 w-10" />
                      <p>No investments found</p>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
