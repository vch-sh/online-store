import { Outlet } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
	return (
		<div className={styles.homeContent}>
			<div className={styles.homeDescription}>
				<h1>
					Welcome to our online store!
				</h1>
				<p>
					Here you can find a wide range of products, carefully selected to meet your needs and interests.
				</p>			
				<p>
					Take a look at our collection and start shopping now!
				</p>			
			</div>
			<Outlet />
		</div>
	)
}

export default Home;