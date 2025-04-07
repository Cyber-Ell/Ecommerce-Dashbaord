import React from 'react'
import { useState, useEffect } from "react";

const Header = () => {
       const [notificationsOpen, setNotificationsOpen] = useState(false);
       const [profileMenuOpen, setProfileMenuOpen] = useState(false);
        

         // Close notifications and profile menu when clicking outside
          useEffect(() => {
            const handleClickOutside = (event) => {
              const target = event.target;
              if (notificationsOpen && !target.closest(".notifications-container")) {
                setNotificationsOpen(false);
              }
              if (profileMenuOpen && !target.closest(".profile-menu-container")) {
                setProfileMenuOpen(false);
              }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, [notificationsOpen, profileMenuOpen]);

  return (
      <header className="flex items-center justify-between h-16 sm:px-6 px-3 bg-white shadow-sm">
          <div className="text-xl font-semibold text-gray-800">Dashboard</div>
        
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                className="relative p-2 text-gray-600 cursor-pointer !rounded-button whitespace-nowrap"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <i className="fas fa-bell text-lg"></i>
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">
                  3
                </span>
              </button>
              {notificationsOpen && (
                <div className="absolute right-0 z-20 w-80 mt-2 overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="px-4 py-3 font-medium text-gray-700 border-b border-gray-200">
                    Notifications (3)
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
                      <div className="flex">
                        <div className="flex-shrink-0 p-2 mr-3 bg-blue-100 rounded-full">
                          <i className="text-blue-500 fas fa-shopping-cart"></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700">
                            New order{" "}
                            <span className="font-medium">#ORD-7246</span> has
                            been placed
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-gray-500">
                              10 minutes ago
                            </span>
                            <button className="text-xs text-blue-600 hover:text-blue-800">
                              Mark as read
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-b border-gray-100 hover:bg-gray-50">
                      <div className="flex">
                        <div className="flex-shrink-0 p-2 mr-3 bg-green-100 rounded-full">
                          <i className="text-green-500 fas fa-dollar-sign"></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700">
                            Payment of{" "}
                            <span className="font-medium">$299.99</span>{" "}
                            received for order #ORD-7244
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-gray-500">
                              35 minutes ago
                            </span>
                            <button className="text-xs text-blue-600 hover:text-blue-800">
                              Mark as read
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50">
                      <div className="flex">
                        <div className="flex-shrink-0 p-2 mr-3 bg-yellow-100 rounded-full">
                          <i className="text-yellow-500 fas fa-exclamation-triangle"></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700">
                            Inventory alert:{" "}
                            <span className="font-medium">
                              Wireless Earbuds Pro
                            </span>{" "}
                            is running low
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-gray-500">
                              2 hours ago
                            </span>
                            <button className="text-xs text-blue-600 hover:text-blue-800">
                              Mark as read
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 text-center border-t border-gray-200">
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                      View all notifications
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => {
                  const profileMenuOpen = notificationsOpen;
                  setNotificationsOpen(false);
                  setProfileMenuOpen(!profileMenuOpen);
                }}
              >
                <img
                  src="https://public.readdy.ai/ai/img_res/f54739ce1887d23a5e7e11ce1aa61695.jpg"
                  alt="User"
                  className="object-cover w-8 h-8 rounded-full"
                />
                <div className="ml-2">
                  <div className="text-sm font-medium text-gray-700">
                    John Doe
                  </div>
                  <div className="text-xs text-gray-500">Admin</div>
                </div>
              </div>
              {profileMenuOpen && (
                <div className="absolute right-0 z-20 w-56 mt-2 overflow-hidden bg-white rounded-lg shadow-lg profile-menu-container">
                  <div className="py-3 px-4 border-b border-gray-200">
                    <div className="font-medium text-gray-800">John Doe</div>
                    <div className="text-xs text-gray-500">
                      john.doe@example.com
                    </div>
                  </div>
                  <div className="py-1">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <i className="w-5 mr-3 text-gray-500 fas fa-user"></i>
                      My Profile
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <i className="w-5 mr-3 text-gray-500 fas fa-cog"></i>
                      Account Settings
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <i className="w-5 mr-3 text-gray-500 fas fa-sliders-h"></i>
                      Preferences
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <i className="w-5 mr-3 text-gray-500 fas fa-question-circle"></i>
                      Help & Support
                    </button>
                  </div>
                  <div className="py-1 border-t border-gray-200">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                      <i className="w-5 mr-3 text-red-500 fas fa-sign-out-alt"></i>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
  )
}

export default Header