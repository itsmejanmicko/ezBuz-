import React from "react";

type BusData = {
  busNumber: string;
  coverage: string;
  revenue: string;
  ticketsSold: string;
  trips: number;
};

const data: BusData[] = [
  {
    busNumber: "10",
    coverage: "Monumento to PITX - vice versa",
    revenue: "₱12,000.00",
    ticketsSold: "489 Tickets",
    trips: 8,
  },
  {
    busNumber: "15",
    coverage: "Jordan Plains to Quezon City Hall",
    revenue: "₱10,000.00",
    ticketsSold: "369 Tickets",
    trips: 9,
  },
  {
    busNumber: "01",
    coverage: "San Rafael Terminal to Q.C. Hall",
    revenue: "₱9,000.00",
    ticketsSold: "305 Tickets",
    trips: 8,
  },
  {
    busNumber: "23",
    coverage: "Monumento to PITX",
    revenue: "₱8,000.00",
    ticketsSold: "299 Tickets",
    trips: 7,
  },
  {
    busNumber: "06",
    coverage: "Monumento to PITX",
    revenue: "₱7,000.00",
    ticketsSold: "206 Tickets",
    trips: 8,
  },
];

const TopPerformingBus: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-0 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold text-center mb-4">Top Performing Bus</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2 text-left">Bus #</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Coverage</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Revenue</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Tickets Sold</th>
              <th className="border border-gray-200 px-4 py-2 text-left"># of Trips</th>
            </tr>
          </thead>
          <tbody>
            {data.map((bus, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{bus.busNumber}</td>
                <td className="border border-gray-200 px-4 py-2">{bus.coverage}</td>
                <td className="border border-gray-200 px-4 py-2">{bus.revenue}</td>
                <td className="border border-gray-200 px-4 py-2">{bus.ticketsSold}</td>
                <td className="border border-gray-200 px-4 py-2">{bus.trips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopPerformingBus;
