import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Clock, MapPin } from "lucide-react";
import { manilaSVG, PassengerSVG, SalesSVG } from "@/utils/helper/imageHelper";
import { Card, CardContent } from "./ui/card";
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const progressData = [
  { name: "Cash", value: 40, fill: "#8b5cf6" },
  { name: "Online Payment", value: 25, fill: "#8b5cf6" },
  { name: "NFC", value: 35, fill: "#8b5cf6" },
];
export function SalesPanel() {
  const [hoveredStop, setHoveredStop] = useState<number | null>(null);

  const stops = [
    { name: "Monumento", sales: "₱300", passengers: "20", pos: "0" },
    { name: "North Edsa", sales: "₱300", passengers: "20", pos: "1/4" },
    { name: "Ayala", sales: "₱300", passengers: "20", pos: "2/4" },
    { name: "BGC", sales: "₱900", passengers: "20", pos: "3/4" },
    { name: "PITX", sales: "₱0", passengers: "0", pos: "full" },
  ];

  return (
   <div className="grid grid-cols-[1fr_16rem]">
  {/* Main Panel */}
  <div className="bg-gray-50 rounded-lg p-4 overflow-visible">
    {/* Header */}
    <div className="flex justify-between items-end mb-4">
      <div className="flex flex-col p-4 pt-3 space-y-1">
        <span>Total Sales</span>
        <span className="text-2xl font-extrabold">₱2,000.00</span>
      </div>
      <div className="flex gap-4">
        <div className="bg-primary text-white items-center flex gap-3 border p-3 rounded-md">
          <img src={manilaSVG} alt="chart" className="rounded-full h-8 w-8" />
          <span className="text-center">Manila To PITX</span>
          <IoIosArrowDown className="text-md mt-1" />
        </div>
        <div className="bg-primary text-white items-center flex gap-3 border p-3 rounded-md">
          <span className="text-center">Daily</span>
          <IoIosArrowDown className="text-md mt-1" />
        </div>
      </div>
    </div>

    {/* Timeline Section */}
    <div className="relative my-6">
    <div className="flex justify-between items-center mb-8">
        {/* Origin */}
        <div className="flex flex-col items-start gap-2">
        <Clock className="w-5 h-5 text-orange-500" />
        <span className="text-5xl font-bold text-gray-900">7:04</span>
        <span className="text-sm text-gray-500 font-medium">AM</span>
        <div className="ml-2">
            <p className="font-semibold text-gray-900">Manila</p>
            <p className="text-md text-gray-500">Sep 21, 2025</p>
            <p className="text-md text-gray-500">Sunday</p>
        </div>
        </div>

        {/* Timeline line + dots */}
        <div className="flex-1 relative px-8 mt-12">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-200 rounded-full -translate-y-1/2 z-0"></div>
        {stops.map((stop, index) => (
            <div
            key={index}
            className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10`}
            style={{
                left:
                stop.pos === "0"
                    ? "0%"
                    : stop.pos === "1/4"
                    ? "25%"
                    : stop.pos === "2/4"
                    ? "50%"
                    : stop.pos === "3/4"
                    ? "75%"
                    : "100%",
            }}
            >
            <div
                className={`w-4 h-4 rounded-full border-2 border-white ${
                stop.pos === "0" || stop.pos === "full"
                    ? "bg-black"
                    : "bg-orange-500"
                }`}
            />
            {/* Stop card */}
          <div
                    onMouseEnter={() => setHoveredStop(index)}
                    onMouseLeave={() => setHoveredStop(null)}
                    className={`absolute ${
                        index === stops.length - 1
                        ? "right-[-2rem] top-[-6rem]"     
                        : index % 2 === 0
                        ? "-top-28 left-16"
                        : "top-8 left-1/2"
                    } transform -translate-x-1/2 w-32 bg-gray-100 rounded-lg p-3 text-center shadow transition-all duration-200 ${
                        hoveredStop === index ? "z-50 scale-105 shadow-xl" : "z-20"
                    }`}
                    >
                <p className="font-semibold text-gray-900 text-sm mb-2">{stop.name}</p>
                <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1">
                    <SalesSVG />
                    <span className="text-xs text-gray-600">Sales:</span>
                    <span className="text-xs font-semibold text-gray-900">{stop.sales}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                    <PassengerSVG />
                    <span className="text-xs text-gray-600">Passenger:</span>
                    <span className="text-xs font-semibold text-gray-900">{stop.passengers}</span>
                    </div>
                </div>
                </div>

                            </div>
                        ))}
                        </div>

        {/* Destination */}
        <div className="text-right">
        <div className="flex items-center gap-2 justify-end">
            <span className="text-5xl font-bold text-gray-900">1:00</span>
            <span className="text-sm text-gray-500 font-medium">PM</span>
            <MapPin className="w-5 h-5 text-orange-500" />
        </div>
        <div className="mt-2">
            <p className="font-semibold text-gray-900">PITX</p>
            <p className="text-md text-gray-500">Sep 11, 2025</p>
            <p className="text-md text-gray-500">Sunday</p>
        </div>
        </div>
    </div>
    </div>




    </div>

    {/* Payment Panel */}
    <div className="bg-white">
        <PaymentPanel />
    </div>
    </div>

    );
    }

function PaymentPanel() {
  return (
    <div className="space-y-2">
      {progressData.map((item, index) => (
        <Card key={index} className="bg-gray-200 shadow-sm border-0 rounded-2xl">
          <CardContent className="p-0">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-4">{item.name}</p>

              {/* Gradient border wrapper */}
              <div
                className="relative w-20 h-20 mx-auto rounded-full p-[4px]"
                style={{
                  background: `conic-gradient(from 0deg, #4ade80, #22d3ee)`,
                }}
              >
                {/* Inner circle with the chart */}
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      cx="50%"
                      cy="50%"
                      innerRadius="40%"
                      outerRadius="100%"
                      data={[{ value: item.value, fill: `url(#grad-${index})` }]}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <defs>
                        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#4ade80" />
                          <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                      </defs>
                      <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                      <RadialBar dataKey="value" cornerRadius={10} fill={`url(#grad-${index})`} />
                    </RadialBarChart>
                  </ResponsiveContainer>

                  {/* Center text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-900">{item.value}%</span>
                  </div>
                </div>
              </div>

              {index === 1 && <p className="text-xs text-gray-500 mt-4">Duration 9h 0m</p>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}




