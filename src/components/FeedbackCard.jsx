import React from 'react'
import { avatar,quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <img src={avatar} />

                <div>
                    <h1>
                        Jenny Wilson
                    </h1>
                    
                    <p>
                        UI-UX Designer
                    </p>
                </div>

                

            </div>
            <img className='h-8' src={quotationMark} />

        </div>

        <div className='py-8'>
            <h3 className='text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra elementum sem a vehicula. Nam ultricies suscipit eros sit amet semper. Sed accumsan erat vel efficitur pretium..


            </h3>
        </div>
    </div>
  )
}

export default FeedbackCard