import React from 'react'
import DishesCard from '../layouts/DishesCard'

const Dishes = () => {
  return (
    <div className='min-h-screen flex flex-col jusitfy-center items-center lg:px-32 px-5'>
        <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>Our Dishes</h1>
        <div className='flex flex-wrap gap-8 justify-center'>
            <DishesCard img='https://images.unsplash.com/photo-1693684236218-5c0b626c488f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                title='Tasteful' price='$19.99' />
            <DishesCard img='https://plus.unsplash.com/premium_photo-1692883560766-bb99591f1a60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                title='Tasteful' price='$17.99' />
            <DishesCard img='https://images.unsplash.com/photo-1693857226065-3b3f482ecad0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                title='Tasteful' price='$15.99' />
            <DishesCard img='https://images.unsplash.com/photo-1692389342098-103208608f3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                title='Tasteful' price='$14.99' />
            <DishesCard img='https://plus.unsplash.com/premium_photo-1692287214489-0e5f50e22c78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMnx4alBSNGhsa0JHQXx8ZW58MHx8fHx8'
                title='Tasteful' price='$13.99' />
            <DishesCard img='https://images.unsplash.com/photo-1690228244205-7617c71b1136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NHx4alBSNGhsa0JHQXx8ZW58MHx8fHx8'
                title='Tasteful' price='$10.99' />
        </div>
    </div>
  )
}

export default Dishes