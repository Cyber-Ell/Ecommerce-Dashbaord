import React from 'react'

const Cards = (props) => {

  const darkMode = props.darkMode; // Assuming darkMode is passed as a prop

  return (
       <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Sales Card */}
            <div className={`${ props.darkMode ? 'bg-gray-800' : 'bg-white'} p-6  rounded-lg shadow-sm`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Sales
                  </p>
                  <h3 className={`${darkMode ? 'text-white' : 'text-gray-800' } sm:text-2xl md:text-lg text-xl font-bold`}>
                    $124,563
                  </h3>
                </div>
                <div className="p-3 flex items-center h-11.5 w-9 justify-center bg-blue-100 rounded-full">
                  <i className="text-blue-800 fas fa-dollar-sign"></i>
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <span className="flex items-center text-green-500">
                  <i className="mr-1 fas fa-arrow-up"></i> 12.5%
                </span>
                <span className="ml-2 text-gray-500">vs last   month</span>
              </div>
            </div>
            {/* Daily Revenue Card */}
            <div className={`${ props.darkMode ? 'bg-gray-800' : 'bg-white'} p-6  rounded-lg shadow-sm`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Daily Revenue
                  </p>
                  <h3 className={`${darkMode ? 'text-white' : 'text-gray-800' } sm:text-2xl md:text-lg text-xl font-bold`}>
                    $8,345
                  </h3>
                </div>
                <div className="p-3 flex items-center h-11.5 w-9 justify-center bg-green-100 rounded-full">
                  <i className="text-green-600 fas fa-chart-line"></i>
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <span className="flex items-center text-green-500">
                  <i className="mr-1 fas fa-arrow-up"></i> 8.2%
                </span>
                <span className="ml-2 text-gray-500">vs yesterday</span>
              </div>
            </div>
            {/* Total Orders Card */}
            <div className={`${ props.darkMode ? 'bg-gray-800' : 'bg-white'} p-6  rounded-lg shadow-sm`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Orders
                  </p>
                  <h3 className={`${darkMode ? 'text-white' : 'text-gray-800' } sm:text-2xl md:text-lg text-xl font-bold`}>1,253</h3>
                </div>
                <div className="p-3 flex items-center h-11.5 w-9 justify-center bg-purple-100 rounded-full">
                  <i className="text-purple-600 fas fa-shopping-bag"></i>
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <span className="flex items-center text-green-500">
                  <i className="mr-1 fas fa-arrow-up"></i> 5.3%
                </span>
                <span className="ml-2 text-gray-500">vs last month</span>
              </div>
            </div>
            {/* Average Order Value Card */}
            <div className={`${ props.darkMode ? 'bg-gray-800' : 'bg-white'} p-6  rounded-lg shadow-sm`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium ">
                    Avg. Order Value
                  </p>
                  <h3 className={`${darkMode ? 'text-white' : 'text-gray-800' } sm:text-2xl md:text-lg text-xl font-bold`}>$99.42</h3>
                </div>
                <div className="p-3 flex items-center h-11.5 w-9 justify-center bg-yellow-100 rounded-full">
                  <i className="text-yellow-600 fas fa-receipt"></i>
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <span className="flex items-center text-red-500">
                  <i className="mr-1 fas fa-arrow-down"></i> 1.8%
                </span>
                <span className="ml-2 text-gray-500">vs last month</span>
              </div>
            </div>
          </div>
  
  )
}

export default Cards