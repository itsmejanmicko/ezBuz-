import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Dot } from 'recharts';

const data = [
  { time: '8:00', value: 500 },
  { time: '9:00', value: 300 },
  { time: '10:00', value: 1200 },
  { time: '11:00', value: 1300 },
  { time: '12:00', value: 700 },
  { time: '13:00', value: 1500 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-2 rounded shadow-lg">
        <p>{`value ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export const SalesChart = () => {
  return (
    <div className="w-full h-80  p-4 px-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-center font-semibold ">Sales Per Hr</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4ade80"
            strokeWidth={2}
            dot={{ r: 5, fill: '#4ade80' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
