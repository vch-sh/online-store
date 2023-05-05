import { createContext, useState } from 'react';
import products from '../data/products';

export const Context = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < products.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
}

export const ContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const addToCart = (productId) => {
		setCartItems((prev) => ({...prev, [productId]: prev[productId] + 1}));
	}

	const removeFromCart = (productId) => {
		setCartItems((prev) => ({...prev, [productId]: prev[productId] - 1}));
	}

	const editProductCount = (newValue, productId) => {
		setCartItems((prev) => ({...prev, [productId]: newValue}))
	}

	const getTotalCost = () => {
		let totalCost = 0;
		for (let cartItem in cartItems) {
			if (!!cartItems[cartItem]) {
				let itemInfo = products.find(product => product.id === Number(cartItem));
				totalCost += cartItems[cartItem] * itemInfo.price;
			}
		}
		return totalCost;
	}

	const contextValue = {
		cartItems, 
		addToCart, 
		removeFromCart, 
		editProductCount, 
		getTotalCost
	};

	return (
		<Context.Provider value={contextValue}>
			{children}
		</Context.Provider>
	)
}