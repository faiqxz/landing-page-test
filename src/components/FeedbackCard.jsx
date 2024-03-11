import React from 'react'
import { avatar, quotationMark } from '../assets'

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl my-8 mx-2'>
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <img src={avatar} />
                <div>
                    <h1>Jenny Wilson</h1>
                    <p>UI-UX Deigner</p>
                </div>
                
            </div>
            <img className='h-8' src={quotationMark} />
        </div>

        <div className='py-8'>
            <h3 className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa quae ullam maiores veniam illo odio voluptatum, quasi ab excepturi earum rerum sapiente! Quia provident illum esse quidem quo dolor.</h3>
        </div>
    </div>
  )
}

export default FeedbackCard