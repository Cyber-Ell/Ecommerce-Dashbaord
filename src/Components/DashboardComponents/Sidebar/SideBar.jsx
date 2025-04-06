import React from 'react'
import { useState } from 'react'

const SideBar = (props) => {
        const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div>
        <div
        className={`bg-white shadow-lg transition-all duration-300 ${props.sidebarCollapsed ? "w-20" : "w-64"} fixed h-full z-10`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100">
          {!props.sidebarCollapsed && (
            <div className="text-xl font-bold text-blue-800">ShopDash</div>
          )}
          {props.sidebarCollapsed && (
            <div className="mx-auto text-xl font-bold text-blue-800">SD</div>
          )}
          <button
            onClick={props.toggleSidebar}
            className="cursor-pointer !rounded-button whitespace-nowrap p-2 rounded-full hover:bg-gray-100"
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
                  className={`flex items-center w-full p-3 transition-colors cursor-pointer !rounded-button whitespace-nowrap ${activeTab === "dashboard" ? "bg-blue-50 text-blue-800" : "text-gray-600 hover:bg-gray-100"} rounded-lg`}
                >
                  <i className="fas fa-home text-lg"></i>
                  {!props.sidebarCollapsed && <span className="ml-4">Dashboard</span>}
                </button>
              </li>
              <li>
                <a
                  href="https://readdy.ai/home/e290ee54-b5a0-401c-bdd8-cb94a3b3f84e/ce8bf8b3-b9c4-4ad4-a83f-2e4d859103e1"
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