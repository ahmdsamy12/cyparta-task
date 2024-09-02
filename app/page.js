import DashboardLayout from "@/components/DashboardLayout";

const Home = () => {
  return (
    <>
      <DashboardLayout>
        <div className="text-2xl font-bold">Welcome to the Dashboard</div>
        <p className="mt-4">This is the main content area.</p>
      </DashboardLayout>
    </>
  );
};

export default Home;
