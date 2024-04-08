import React from 'react'
import Sidebar from '../../components/degan/Sidebar'
import Header from '../../components/degan/Header'
import Air1 from '@/app/components/degan/airdrop/Air1'
import Airdroplist from '@/app/components/degan/airdrop/Airdroplist'
import Airdropopen from '@/app/components/degan/airdrop/Airdropopen'

const page = () => {
  return (
    <div className='flex flex-row bg-black'>
      <Sidebar />
      <div>
        <div className='w-full'>
          <Header />
        </div>

        {/* <Air1 /> */}
        <Airdroplist />
        {/* <Airdropopen /> */}

      </div>
    </div>
  )
}

export default page
