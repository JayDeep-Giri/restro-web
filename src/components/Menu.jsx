import React from 'react'
import DishesCard from '../layouts/DishesCard'

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>Premium Menu</h1>
        <div className='className=" flex flex-wrap gap-8 justify-center'>
            <DishesCard
             img='https://images.unsplash.com/photo-1678891908446-a168ae697a68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0OHx4alBSNGhsa0JHQXx8ZW58MHx8fHx8'
             title='Delicious Dish'
             price='$14,99' />
            <DishesCard
             img='https://images.unsplash.com/photo-1657934787560-cbecc866430a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2Nnx4alBSNGhsa0JHQXx8ZW58MHx8fHx8'
             title='Delicious Dish'
             price='$14,99' />
            <DishesCard
             img='https://images.unsplash.com/photo-1675914850327-87b816de133e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0N3x4alBSNGhsa0JHQXx8ZW58MHx8fHx8'
              title='Delicious Dish'
               price='$14,99' />
        </div>
    </div>
  )
}

export default Menu