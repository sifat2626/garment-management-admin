import BuyerProfileChart from "../components/BuyerProfileChart";
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import TransactionChart from "../components/TransactionChart";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4 max-w-screen-xl mx-auto p-4">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4">
        <div className="flex-1 min-w-[300px]">
          <TransactionChart />
        </div>
        <div className="flex-1 min-w-[300px]">
          <BuyerProfileChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
