import Product from './Product';
import products from '../data/products';
import styles from '../styles/Products.module.css';

const Products = () => {
	return (
		<div className={styles.products}>
			{products.map((product) => {
				return <Product key={product.id} {...product} />
			})}
		</div>
	)
}

export default Products;