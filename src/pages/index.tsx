import DashboardPanel from "../components/DashboardPanel";
import LineBreak from "../components/LineBreak";
import { SalesPanel } from "../components/SalesPanel";


export default function DashboardPages(){
    return (
        <main className="overflow-hidden">
          <div>
              <DashboardPanel />
          </div>
             <LineBreak title="Live Sales Feed" />
            <div className="pt-4">
               <SalesPanel />
            </div>
        </main>
    )
}