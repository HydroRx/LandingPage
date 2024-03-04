import React from 'react'
import {BsVectorPen,BsArrowUpRight} from 'react-icons/bs'

const CategoryCard = ({icons,title}) => {
  return (
<div class="category-card bg-white p-4 shadow-lg rounded-md glow-on-hover flex items-center justify-between border border-transparent transition duration-500 ease-in-out hover:border-[#20B486] hover:cursor-pointer group/edit">
        <div className='flex gap-4'>
            {icons}
            <h1 className='text-xl font-semibold'>
                {title}
            </h1>
        </div>

        <div className='group-hover/edit:bg-[#20B486] transition duration-500 ease-in-out rounded-lg p-1.5'>
            <BsArrowUpRight
                size={30}
                style={{color:'#20B486'}}
                className='arrow-icon'
            />
        </div>
    </div>
  )
}

export default CategoryCard