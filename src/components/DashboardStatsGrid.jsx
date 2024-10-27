import { IoBagHandle, IoCash, IoPeople } from "react-icons/io5";

/* eslint-disable react/prop-types */
function DashboardStatsGrid() {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      <BoxWrapper color="bg-green-400">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500 transition-transform transform hover:scale-105">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-600 font-light">Total Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-900 font-semibold">150</strong>
            <span className="text-sm text-green-700 pl-2">+20</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper color="bg-red-400">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500 transition-transform transform hover:scale-105">
          <IoCash className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-600 font-light">
            Total Expenses
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-900 font-semibold">
              $1,200.50
            </strong>
            <span className="text-sm text-red-700 pl-2">-50</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper color="bg-blue-400">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-500 transition-transform transform hover:scale-105">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-600 font-light">
            Total Customers
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-900 font-semibold">300</strong>
            <span className="text-sm text-blue-700 pl-2">+15</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper color="bg-sky-400">
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500 transition-transform transform hover:scale-105">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-600 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-900 font-semibold">
              $3,425.60
            </strong>
            <span className="text-sm text-green-700 pl-2">+234</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

export default DashboardStatsGrid;

function BoxWrapper({ children, color }) {
  return (
    <div
      className={`rounded-sm p-4 flex-1 border border-gray-200 flex items-center shadow hover:shadow-lg transition-shadow duration-200 ${color}`}
    >
      {children}
    </div>
  );
}
