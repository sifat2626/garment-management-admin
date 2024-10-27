import { useState } from "react";

const initialReportData = [
  { id: "R001", product: "T-Shirt", sales: 150, revenue: 4498.5 },
  { id: "R002", product: "Jeans", sales: 80, revenue: 3999.2 },
  { id: "R003", product: "Jacket", sales: 50, revenue: 4499.5 },
  { id: "R004", product: "Sweater", sales: 30, revenue: 1199.7 },
  { id: "R005", product: "Dress", sales: 100, revenue: 5999.0 },
];

function ReportPage() {
  const [reportData] = useState(initialReportData);

  const totalSales = reportData.reduce((sum, report) => sum + report.sales, 0);
  const totalRevenue = reportData.reduce(
    (sum, report) => sum + report.revenue,
    0
  );
  const averageRevenue = (totalRevenue / reportData.length).toFixed(2);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Sales Reports
      </h2>

      {/* Analytics Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow border border-gray-300">
          <h3 className="text-lg font-medium text-gray-700">Total Sales</h3>
          <p className="text-2xl font-bold text-blue-600">{totalSales}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-300">
          <h3 className="text-lg font-medium text-gray-700">Total Revenue</h3>
          <p className="text-2xl font-bold text-green-600">
            ${totalRevenue.toFixed(2)}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border border-gray-300">
          <h3 className="text-lg font-medium text-gray-700">
            Average Revenue per Product
          </h3>
          <p className="text-2xl font-bold text-orange-600">
            ${averageRevenue}
          </p>
        </div>
      </div>

      {/* Report Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 border-b text-left">Report ID</th>
              <th className="py-3 px-4 border-b text-left">Product</th>
              <th className="py-3 px-4 border-b text-left">Units Sold</th>
              <th className="py-3 px-4 border-b text-left">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((report) => (
              <tr key={report.id} className="text-sm hover:bg-gray-100">
                <td className="border-b py-2 px-4 text-center">{report.id}</td>
                <td className="border-b py-2 px-4">{report.product}</td>
                <td className="border-b py-2 px-4 text-center">
                  {report.sales}
                </td>
                <td className="border-b py-2 px-4 text-center">
                  ${report.revenue.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportPage;
