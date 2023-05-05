import { useContext } from 'react';
import { Context } from '../context/Context';
import Button from '../ui/Button';
import styles from '../styles/Product.module.css';

const Product = (props) => {
	const {cartItems, addToCart} = useContext(Context);
	const cartItemAmount = cartItems[props.id];
	return (
		<div className={styles.singleProduct}>
			<img src={props.image} alt={props.title} />
			<p>{props.title}</p>
			<p>${props.price}</p>
			<Button addToCart={addToCart} id={props.id} cartItemAmount={cartItemAmount} />
		</div>
	)
}

export default Product;