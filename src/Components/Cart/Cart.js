import classes from './Cart.module.css';
import Model from '../UI/Model';

const Cart = props =>{
    const cartItems = <ul className={classes['cart-items']}> {[ {id: 'c1', name: 'rishu', amount: '2', price: '12.9'}].map((item)=> <li>{item.name}</li>)}</ul>;

    return (
        <Model>
            {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']}>close</button>
            <button className={classes.button}>order</button>
        </div>
        </Model>

    )

}

export default Cart;