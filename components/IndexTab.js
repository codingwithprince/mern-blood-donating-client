import React, { useState } from 'react'
import AllDonatorsByGroup from './AllDonatorsByGroup'
import Eligible from './Eligible'

const IndexTab = () => {
    const [tab, setTab] = useState(1)
  return (
    <div className='px-2'>
            <div className="tab-header flex justify-center gap-2 py-5 md:py-10">
                <button onClick={()=> setTab(0)} className={`${tab === 0 ? 'bg-green-500 text-white py-2 px-4 border-1 hover:bg-green-600 hover:text-white' : 'bg-white py-2  border-1 px-4 text-green-600 hover:bg-green-500 hover:text-white'}  text-sm font-semibold rounded-md shadow-lg`}>Eligible Donators</button>
                <button onClick={()=> setTab(1)} className={`${tab === 1 ? 'bg-green-500 text-white py-2 px-4 border-1 hover:bg-green-600 hover:text-white' : 'bg-white py-2  border-1 px-4 text-green-600 hover:bg-green-500 hover:text-white'}  text-sm font-semibold rounded-md shadow-lg`}>All Donators</button>
            </div>
            <div className='content'>
                {
                    tab === 0 ? <Eligible /> : <AllDonatorsByGroup />
                }
            </div>
    </div>
  )
}

export default IndexTab