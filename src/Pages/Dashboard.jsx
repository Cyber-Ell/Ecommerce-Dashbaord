import React from 'react';
import SideBar from '../Components/DashboardComponents/Sidebar/SideBar';
import Header from '../Components/DashboardComponents/Header/Header';
import Cards from '../Components/DashboardComponents/DataCards/Cards';
import Charts from '../Components/DashboardComponents/Charts/Charts';
import Orders from '../Components/DashboardComponents/RecentOrders/Orders';
import TopProducts from '../Components/DashboardComponents/TopProducts/TopProducts';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <SideBar sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        {/* Header */}
        <Header />
        {/* Dark Mode Toggle Button */}
       
        {/* Dashboard Content */}
        <main
          className={`p-3 ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
          }`}
        >
          {/* Metrics card */}
          <Cards />
          {/* Charts */}
          <Charts />
          {/* Recent Activity Section */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Recent Orders */}
            <Orders />
            {/* Top Products */}
            <TopProducts />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;