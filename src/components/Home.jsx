import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row jusitfy-between items-center lg:px-32 px-5 bg-[url('https://images.unsplash.com/photo-1693850226769-2f4d4541917c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D')] bg-cover bg-no-repeat">
        <div className='w-full lg:w-2/3 space-y-5'>
            <h1 className='text-backgroundColor font-semibold text-6xl'>Elevate Your Inner Hunger with Every Bite</h1>
            <p className='text-backgroundColor'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Odit eos aut vero eum quia, nihil sequi! Inventore non eaque illum!                
            </p>
            <div  className=" lg:pl-44">
                <Button title='Order Now' />
            </div>
        </div>
    </div>
  );
};

export default Home;