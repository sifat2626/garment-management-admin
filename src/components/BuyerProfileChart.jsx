/* eslint-disable react/prop-types */
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";

const data = [
  { name: "Male", value: 450 },
  { name: "Female", value: 620 },
  { name: "Other", value: 100 },
];

const COLORS = ["#00c495", "#ffbb28", "#ff8042"];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 p-2 rounded shadow-lg">
        <p className="font-semibold">{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
}

function BuyerProfileChart() {
  return (
    <div className="h-96 w-96 bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Buyer Profile</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<CustomTooltip />} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Legend */}
      <div className="flex flex-row justify-start mt-4">
        {data.map((entry, index) => (
          <div
            key={`legend-${index}`}
            className="flex items-center space-x-2 mr-4" // Add margin-right for spacing
          >
            <div
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
              className="w-3 h-3 rounded-full"
            ></div>
            <span className="text-gray-600">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerProfileChart;
