import {
  Legend,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { Name: "Jan", Expense: 4000, Income: 2000 },
  { Name: "Feb", Expense: 3000, Income: 1398 },
  { Name: "Mar", Expense: 2000, Income: 9800 },
  { Name: "Apr", Expense: 2780, Income: 3908 },
  { Name: "May", Expense: 1890, Income: 4800 },
  { Name: "Jun", Expense: 2390, Income: 3800 },
  { Name: "Jul", Expense: 3490, Income: 4300 },
  { Name: "Aug", Expense: 2000, Income: 2100 },
  { Name: "Sep", Expense: 2780, Income: 3908 },
  { Name: "Oct", Expense: 1890, Income: 4800 },
  { Name: "Nov", Expense: 3490, Income: 4300 },
  { Name: "Dec", Expense: 4000, Income: 2000 },
];

function TransactionChart() {
  return (
    <div className="h-96 w-full bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Transactions</strong>
      <div className="w-full h-80 mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#0ea5e9" />
            <Bar dataKey="Expense" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TransactionChart;
