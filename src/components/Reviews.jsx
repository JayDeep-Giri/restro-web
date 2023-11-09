import React from 'react'
import ReviewCard from '../layouts/ReviewCard';

const Reviews = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>Customer's Review</h1>
        <div className='flex flex-col md:flex-row gap-5 mt-5'>
            <ReviewCard img='https://images.unsplash.com/photo-1493193218435-eb21654c7df6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D'
             name='Adaa Arora'/>
            <ReviewCard img='https://images.unsplash.com/photo-1698851891315-a2a72eff7156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
             name='John Doe'/>
            <ReviewCard img='https://images.unsplash.com/photo-1698653222548-55efeb93e6d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'
             name='Victoria Bonaparte'/>
        </div>
    </div>
  )
}

export default Reviews;