import React from 'react';
import SideBar from '../Components/DashboardComponents/Sidebar/SideBar';
import Header from '../Components/DashboardComponents/Header/Header';
import Cards from '../Components/DashboardComponents/DataCards/Cards';
import Charts from '../Components/DashboardComponents/Charts/Charts';
import Orders from '../Components/DashboardComponents/RecentOrders/Orders';
import TopProducts from '../Components/DashboardComponents/TopProducts/TopProducts';
import ToggleBtn from '../Components/ThemeBtn/ToggleBtn';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);  
  
  console.log(darkMode);

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800' : ' bg-gray-50'} flex h-screen transition-all duration-300 `}>
      {/* Sidebar */}
      <SideBar sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} darkMode={darkMode} />
      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}
       
      >

        {/* Header */}
        <Header darkMode={darkMode} />
        {/* Dark Mode Toggle Button */}
       
        {/* Dashboard Content */}
        <main
          className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50' } p-6 transition-all duration-300   `}>

              {/* Dark Mode Toggle Button */}
              <div className="fixed bottom-5 right-6 z-10">
              <ToggleBtn  darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
        
          {/* Metrics card */}
          <Cards darkMode = {darkMode}/>
          {/* Charts */}
          <Charts darkMode = {darkMode} />
          {/* Recent Activity Section */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Recent Orders */}
            <Orders  darkMode = {darkMode}/>
            {/* Top Products */}
            <TopProducts darkMode = {darkMode}/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;