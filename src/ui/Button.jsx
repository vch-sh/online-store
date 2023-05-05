import styles from '../styles/Button.module.css';

const Button = ({ addToCart, id, cartItemAmount }) => {
	return (
		<button 
			className={styles.button} 
			onClick={() => addToCart(id)}
		>
			Add to Cart {!!cartItemAmount && <>({cartItemAmount})</>}
		</button>
	)
}

export default Button;