import BuyerProfileChart from "../components/BuyerProfileChart";
import DashboardStatsGrid from "../components/DashboardStatsGrid";
import TransactionChart from "../components/TransactionChart";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4 w-full overflow-hidden">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
    </div>
  );
}

export default Dashboard;
