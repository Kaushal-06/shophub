import { Search } from 'lucide-react'
import React from 'react'

const FilterCard = (props) => {
     const {categories, selectedCategories, handleCategoriesChange} = props
  return (
    <div className='w-full rounded-xl bg-white shadow-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 lg:py-5 flex flex-col md:flex-row gap-4'>
        <div className='relative flex-1'>
            <Search className='absolute left-3 top-1/2 text-gray-400 w-5 h-5 transform -translate-y-1/2' />
            <input 
            type="text"
            placeholder='Search products...'
            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
        </div>

        <div className='flex gap-4'>
          <select 
          value={selectedCategories}
          onChange={(e) => handleCategoriesChange(e)}
          className='rounded-lg py-3 px-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-50 sm:w-35'>
            {
                categories.map((cat) => (
                    <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option> 
                ))
            }
            {/* <option value="All">All</option>
            <option value="Electronics">Electronics</option> */}
          </select>
          <select className='rounded-lg py-3 px-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-50 sm:w-35'>
            <option value="All">All</option>
            {/* <option value="Electronics">Electronics</option> */}
          </select>
        </div>
    </div>
  )
}

export default FilterCard