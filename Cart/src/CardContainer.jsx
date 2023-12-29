import React from 'react'
import CardItem from './CardItem'
import { useGlobalContext } from './Context'

const CardContainer = () => {

    const {cart,clearCart,total} = useGlobalContext();

    if(cart.length === 0){
        return (
            <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }

  return (
    <section className='cart'>
        <header>
            <h2>Your bag</h2>
        </header>
        <div>
            {
                cart.map((item)=>{
                    return <CardItem key={item.id} {...item}/>
                })
            }
        </div>
        <footer>
            <hr />
            <div className='cart-total'>
                <h4>
                    total <span>${total}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={clearCart}>Clear cart</button>
        </footer>
    </section>
  )
}

export default CardContainer