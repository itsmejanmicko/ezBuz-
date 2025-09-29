import { dashboardData } from "../utils/helper/helper";

export default function DashboardPanel() {
  return (
    <div className="p-2 overflow-hidden">
      <div className="grid grid-cols-4 gap-6">
        {dashboardData.map((data, index) => {
          const Icon = data.icon; 
          const SalesICon = data.sales;
          return (
            <div
              key={index}
              className={`${data.color} p-4 h-52 rounded-2xl flex flex-col`}
            >
              <div className="flex items-start justify-start mx-2 p-1"> 
                  <Icon  /> 
                </div>

                 <h3 className="text-white pt-4">{data.title}</h3>
              
                <div className="flex-1 mt-4 flex justify-between px-1">
                 <p className="text-white text-xl">{data.value}</p>
                 <div className="bg-[#E6ECFF] px-3 text-center h-6 flex gap-4 items-center  justify-center rounded-md">
                    <SalesICon />
                    <span className="text-md text-black font-bold">10.5%</span>
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
