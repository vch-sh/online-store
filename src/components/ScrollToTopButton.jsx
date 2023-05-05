import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from '../styles/ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		document.documentElement.scrollTop > 150 ? setIsVisible(true) : setIsVisible(false);
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	window.addEventListener("scroll", toggleVisibility);

	return (
		<div className={styles.scrollToTop}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </div>
	)
}

export default ScrollToTopButton;