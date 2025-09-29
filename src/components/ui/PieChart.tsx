import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

type PaymentData = {
  name: string;
  value: number;
};

const data: PaymentData[] = [
  { name: "NFC", value: 15 },
  { name: "Mobile Wallet", value: 25 },
  { name: "Cash", value: 24 },
];

const COLORS: string[] = ["#fca5a5", "#86efac", "#93c5fd"];

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    name: string;
    value: number;
    color: string;
  }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-2 rounded shadow-lg">
        <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export const PaymentMethodChart = () => {
  return (
    <div className="w-full h-80 p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center">
      <h2 className="text-center font-semibold mb-4">
        Payment Method Break down
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label={({ name, value }) => `${name}\n${value}%`}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="white"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
