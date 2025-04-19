import React from 'react'
import { useState } from 'react'

const SideBar = (props) => {
        const [activeTab, setActiveTab] = useState("dashboard");
        const darkMode = props.darkMode; // Assuming darkMode is passed as a prop

  return (
    <div>
        <div
        className={`${darkMode ? 'bg-gray-800' : 'bg-white' } shadow-lg ${props.sidebarCollapsed ? "sm:w-20 " : "sm:w-64 w-svw"} fixed h-svh z-10`}
      >
        <div className="flex items-center justify-between h-16 px-4">
          {!props.sidebarCollapsed && (
            <div className="text-xl font-bold text-blue-800">ShopDash</div>
          )}
          {props.sidebarCollapsed && (
            <div className="mx-auto text-xl font-bold text-blue-800">SD</div>
          )}
          <button
            onClick={props.toggleSidebar}
            className={`${darkMode ? 'hover:bg-gray-none ' : 'hover:bg-gray-100' } cursor-pointer !rounded-button whitespace-nowrap p-1 rounded-xl `}
          >
            <i
              className={`fas ${props.sidebarCollapsed ? "fa-chevron-right" : "fa-chevron-left"} text-gray-500`}
            ></i>
          </button>
        </div>
        <nav className="mt-6">
          <div className="px-4 mb-8">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className={` flex items-center w-full p-3 transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeTab === "dashboard" ? "bg-blue-50 text-blue-800" : " hover:bg-gray-100 text-gray-600"}  rounded-lg`}
                >
                  <i className="fas fa-home text-lg "></i>
                  {!props.sidebarCollapsed && <span className="ml-4">Dashboard</span>}
                </button>
              </li>
              <li>
                <a
                  href="#"
                  data-readdy="true"
                  className={`flex items-center w-full p-3 transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeTab === "products" ? "bg-blue-50 text-blue-800" : "text-gray-600 hover:bg-gray-100"} rounded-lg`}
                  onClick={() => setActiveTab("products")}
                >
                  <i className="fas fa-box text-lg"></i>
                  {!props.sidebarCollapsed && <span className="ml-4">Products</span>}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`flex items-center w-full p-3 transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeTab === "orders" ? "bg-blue-50 text-blue-800" : "text-gray-600 hover:bg-gray-100"} rounded-lg`}
                >
                  <i className="fas fa-shopping-cart text-lg"></i>
                  {!props.sidebarCollapsed && <span className="ml-4">Orders</span>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("customers")}
                  className={`flex items-center w-full p-3 transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeTab === "customers" ? "bg-blue-50 text-blue-800" : "text-gray-600 hover:bg-gray-100"} rounded-lg`}
                >
                  <i className="fas fa-users text-lg"></i>
                  {!props.sidebarCollapsed && <span className="ml-4">Customers</span>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("analytics")}
                  className={`flex items-center w-full p-3 transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeTab === "analytics" ? "bg-blue-50 text-blue-800" : "text-gray-600 hover:bg-gray-100"} rounded-lg`}
                >
                  <i className="fas fa-chart-line text-lg"></i>
                  {!props.sidebarCollapsed && <span className="ml-4">Analytics</span>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`flex items-center w-full p-3 transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeTab === "settings" ? "bg-blue-50 text-blue-800" : "text-gray-600 hover:bg-gray-100"} rounded-lg`}
                >
                  <i className="fas fa-cog text-lg"></i>
                  {!props.sidebarCollapsed && <span className="ml-4">Settings</span>}
                </button>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
            <button className="flex items-center w-full p-3 text-red-500 transition-colors rounded-lg cursor-pointer !rounded-button whitespace-nowrap hover:bg-red-50">
              <i className="fas fa-sign-out-alt text-lg"></i>
              {!props.sidebarCollapsed && <span className="ml-4">Logout</span>}
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default SideBar