import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/Context';
import CartItem from '../components/CartItem';
import products from '../data/products';
import ScrollToTopButton from '../components/ScrollToTopButton';
import styles from '../styles/Cart.module.css';

const Cart = () => {
	const {cartItems, getTotalCost} = useContext(Context);
	const fullCost = getTotalCost();
	const navigate = useNavigate();
	return (
		<>
			<div className={styles.cart}>
				<div className={styles.cartProducts}>
					{products.map(product => {
						if (!!cartItems[product.id]) {
							return (
								<div key={product.id} className={styles.cartItem}>
									<CartItem {...product} />
								</div>
							)
						}
					})}
				</div>
				{!!fullCost ? (
					<div className={styles.checkout}>
						<p>Total cost: $ {fullCost}</p>
						<button>Checkout</button>
						<button onClick={() => navigate('/store', {relative: 'path'})}>Continue Shopping</button>
					</div>
				) : <h1 className={styles.emptyTitle}>Your cart is empty</h1>}
			</div>
			<ScrollToTopButton />
		</>
	)
}

export default Cart;