import React from 'react'

const Orders = () => {
  return (
      <div className="p-6 bg-white rounded-lg shadow-sm lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  Recent Orders
                </h3>
                <button className="px-4 py-2 text-sm text-blue-600 bg-blue-50 cursor-pointer !rounded-button whitespace-nowrap hover:bg-blue-100 rounded-md">
                  View All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-sm text-left text-gray-500 border-b border-gray-200">
                      <th className="px-4 py-3 font-medium">Order ID</th>
                      <th className="px-4 py-3 font-medium">Customer</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Amount</th>
                      <th className="px-4 py-3 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm text-gray-700 border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">#ORD-7246</td>
                      <td className="px-4 py-3">Emma Wilson</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">
                          Completed
                        </span>
                      </td>
                      <td className="px-4 py-3">$149.95</td>
                      <td className="px-4 py-3">Apr 6, 2025</td>
                    </tr>
                    <tr className="text-sm text-gray-700 border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">#ORD-7245</td>
                      <td className="px-4 py-3">Michael Brown</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs text-yellow-800 bg-yellow-100 rounded-full">
                          Processing
                        </span>
                      </td>
                      <td className="px-4 py-3">$89.00</td>
                      <td className="px-4 py-3">Apr 5, 2025</td>
                    </tr>
                    <tr className="text-sm text-gray-700 border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">#ORD-7244</td>
                      <td className="px-4 py-3">Sophia Martinez</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full">
                          Shipped
                        </span>
                      </td>
                      <td className="px-4 py-3">$299.99</td>
                      <td className="px-4 py-3">Apr 5, 2025</td>
                    </tr>
                    <tr className="text-sm text-gray-700 border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">#ORD-7243</td>
                      <td className="px-4 py-3">James Johnson</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full">
                          Completed
                        </span>
                      </td>
                      <td className="px-4 py-3">$129.50</td>
                      <td className="px-4 py-3">Apr 4, 2025</td>
                    </tr>
                    <tr className="text-sm text-gray-700 hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">#ORD-7242</td>
                      <td className="px-4 py-3">Olivia Garcia</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 text-xs text-red-800 bg-red-100 rounded-full">
                          Cancelled
                        </span>
                      </td>
                      <td className="px-4 py-3">$59.99</td>
                      <td className="px-4 py-3">Apr 4, 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  )
}

export default Orders