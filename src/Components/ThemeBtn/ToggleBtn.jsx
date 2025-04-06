import React from 'react'

const ToggleBtn = () => {

        // Toggle dark mode
  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    
  return (
    <div>
      <div className="p-3">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Toggle Dark Mode
          </button>
        </div>
    </div>
  )
}

export default ToggleBtn