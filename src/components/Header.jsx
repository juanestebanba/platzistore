import React, { useContext } from 'react';
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';
import styles from '../styles/Header.module.scss';

const Header = () => {
	const { state, toggleOrder, toggleMenu } = useContext(AppContext);

	return (
		<>
			<nav className={styles.Nav}>
				<img src={menu} alt="menu" className="menu" />
				<div className="navbar-left">
					<img src={logo} alt="logo" className="nav-logo" />
					<ul>
						<li>
							<a href="/">All</a>
						</li>
						<li>
							<a href="/">Clothes</a>
						</li>
						<li>
							<a href="/">Electronics</a>
						</li>
						<li>
							<a href="/">Furnitures</a>
						</li>
						<li>
							<a href="/">Toys</a>
						</li>
						<li>
							<a href="/">Others</a>
						</li>
					</ul>
				</div>
				<div className="navbar-right">
					<ul>
						<li className="more-clickable-area navbar-email pointer" onClick={() => toggleMenu()}>
							platzi@example.com
						</li>
						<li
							className="navbar-shopping-cart"
							onClick={() => toggleOrder()}
						>
							<img className="more-clickable-area pointer" src={shoppingCart} alt="shopping cart" />
							{state.cart && state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
				{state.menuIsOpen && <Menu />}
			</nav>
			{state.orderIsOpen && <MyOrder />}
		</>
	);
}

export default Header;