import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import styles from '../styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = () => {
    removeFromCart(product);
  };
  
	return (
		<div className={styles.OrderItem}>
			<figure>
				<img src={product.image} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src="src/assets/icons/icon_close.png" alt="close" onClick={() => handleRemove(product)}  />
		</div>
	);
}

export default OrderItem;