import React from 'react'

function SearchBar() {
  return (
    <div>
        <div className="items-start rounded-full h-full w-full text-black bg-white border-black overflow-hidden">
          <input type="text" placeholder="Search Google" className="w-full h-full px-4 py-2 outline-none" />
        </div>
    </div>
  )
}

export default SearchBar;

