import { NavLink } from 'react-router-dom';
import { AiOutlineShopping, AiOutlineHome } from 'react-icons/ai'
import styles from '../styles/Menu.module.css';

const Menu = () => {
	return (
		<nav className={styles.nav}>
			<NavLink to='.' end><AiOutlineHome /></NavLink>
			<NavLink to='store'>Store</NavLink>
			<NavLink to='cart'><AiOutlineShopping /></NavLink>
		</nav>
	)
}

export default Menu;