import React from 'react'


const TopProducts = (props) => {

  const darkMode = props.darkMode

  return (
    <div>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6  rounded-lg shadow-sm`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`${darkMode ? 'text-white' :' text-gray-800' } mb-6 text-lg font-semibold`}>
                  Top Products
                </h3>
                <button className="px-4 py-2 text-sm text-blue-600 bg-blue-50 cursor-pointer !rounded-button whitespace-nowrap hover:bg-blue-100 rounded-md">
                  View All
                </button>
              </div>
              <ul className="space-y-4">
                <li className="p-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <img
                        src="https://public.readdy.ai/ai/img_res/8ef045332b39facc79569e799efd3f43.jpg"
                        alt="Wireless Earbuds"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 ml-3">
                      <h4 className="text-sm font-medium text-gray-800">
                        Wireless Earbuds Pro
                      </h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">352 sales</span>
                        <span className="text-xs font-medium text-gray-800">
                          $12,320
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full">
                      <div
                        className="h-1.5 bg-blue-600 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs font-medium text-green-600">
                      +12%
                    </span>
                  </div>
                </li>
                <li className="p-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <img
                        src="https://public.readdy.ai/ai/img_res/a7d5995fccfed18643941d235f79f7e3.jpg"
                        alt="Smart Watch"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 ml-3">
                      <h4 className="text-sm font-medium text-gray-800">
                        Smart Watch Series 5
                      </h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">294 sales</span>
                        <span className="text-xs font-medium text-gray-800">
                          $9,870
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full">
                      <div
                        className="h-1.5 bg-blue-600 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs font-medium text-green-600">
                      +8%
                    </span>
                  </div>
                </li>
                <li className="p-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <img
                        src="https://public.readdy.ai/ai/img_res/0c29416171e69c9f6aa089afb3c7807c.jpg"
                        alt="Leather Wallet"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 ml-3">
                      <h4 className="text-sm font-medium text-gray-800">
                        Premium Leather Wallet
                      </h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">245 sales</span>
                        <span className="text-xs font-medium text-gray-800">
                          $6,125
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full">
                      <div
                        className="h-1.5 bg-blue-600 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs font-medium text-red-600">
                      -3%
                    </span>
                  </div>
                </li>
                <li className="p-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <img
                        src="https://public.readdy.ai/ai/img_res/b8df983398ee083cb17c79456535e560.jpg"
                        alt="Bluetooth Speaker"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 ml-3">
                      <h4 className="text-sm font-medium text-gray-800">
                        Portable Bluetooth Speaker
                      </h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">198 sales</span>
                        <span className="text-xs font-medium text-gray-800">
                          $5,940
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full">
                      <div
                        className="h-1.5 bg-blue-600 rounded-full"
                        style={{ width: "58%" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs font-medium text-green-600">
                      +15%
                    </span>
                  </div>
                </li>
                <li className="p-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 overflow-hidden rounded-lg">
                      <img
                        src="https://public.readdy.ai/ai/img_res/9353314dbf371254148ee2806b2cf878.jpg"
                        alt="Backpack"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 ml-3">
                      <h4 className="text-sm font-medium text-gray-800">
                        Urban Travel Backpack
                      </h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-500">176 sales</span>
                        <span className="text-xs font-medium text-gray-800">
                          $4,400
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-full h-1.5 bg-gray-200 rounded-full">
                      <div
                        className="h-1.5 bg-blue-600 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs font-medium text-green-600">
                      +5%
                    </span>
                  </div>
                </li>
              </ul>
            </div>
    </div>
  )
}

export default TopProducts