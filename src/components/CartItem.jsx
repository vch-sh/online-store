import { useContext } from 'react';
import { Context } from '../context/Context';
import styles from '../styles/CartItem.module.css';

const CartItem = (props) => {
	const {cartItems, addToCart, removeFromCart, editProductCount} = useContext(Context);
	return (
		<div className={styles.cartItem}>
			<img src={props.image} alt={props.title} />
			<p>{props.title}</p>
			<div className={styles.priceBox}>
				<p>${props.price}</p>
				<div className={styles.productCount}>
					<button onClick={() => removeFromCart(props.id)}>-</button>
					<input value={cartItems[props.id]} onChange={(event) => editProductCount(event.target.value, props.id)} />
					<button onClick={() => addToCart(props.id)}>+</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem;