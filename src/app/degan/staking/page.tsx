import React from 'react'
import Sidebar from '../../components/degan/Sidebar'
import Header from '../../components/degan/Header'


const page = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div>
        <div className='w-full'>
          <Header />
        </div>

        

      </div>
    </div>
  )
}

export default page
