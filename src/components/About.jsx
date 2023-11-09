import React from 'react'
import Button from '../layouts/Button'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5'>
        <img className='rounded-full p-5' src='https://plus.unsplash.com/premium_photo-1676648117781-e671a792226e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwNnx4alBSNGhsa0JHQXx8ZW58MHx8fHx8'
         alt='img' />
         <div className='space-y-4 lg:pt-14 ml-10px'>
            <h3 className='font-semibold text-4xl text-center md:text-start'>Why Choose Us?</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, numquam ipsam ratione at exercitationem qui culpa,
                 asperiores quaerat quis illo neque possimus facere atque expedita! Ullam maxime quaerat,
                 asperiores hic error quis consequatur quod placeat similique odit totam recusandae debitis.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Magnam, velit, hic officia optio aliquam quo corporis asperiores
                doloribus doloremque corrupti expedita odit vel cum quos excepturi ipsa autem veritatis repellendus!
            </p>
            <div className='flex justify-center lg:justify-start'>
                <Button title='Learn More' />
            </div>
         </div>
    </div>
  )
}

export default About