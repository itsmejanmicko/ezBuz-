import { SalesChart } from "@/components/ui/Charts";
import DashboardPanel from "../components/DashboardPanel";
import LineBreak from "../components/LineBreak";
import { SalesPanel } from "../components/SalesPanel";
import { PaymentMethodChart } from "@/components/ui/PieChart";
import TopPerformingBus from "@/components/ui/Bus";


export default function DashboardPages() {
  return (
    <main className="overflow-hidden">
      <div>
        <DashboardPanel />
      </div>

      <LineBreak title="Live Sales Feed" />
      <div className="pt-4">
        <SalesPanel />
      </div>

      <LineBreak title="Charts Table" />
      <div className="grid grid-cols-4 gap-6 pt-2 z-0 h-screen">
        {/* First two take 1 column each */}
        <div className="col-span-1">
          <SalesChart />
        </div>
        <div className="col-span-1">
          <PaymentMethodChart />
        </div>

        {/* Last one takes 2 columns (bigger) */}
        <div className="col-span-2">
          <TopPerformingBus />
        </div>
      </div>
    </main>
  );
}

