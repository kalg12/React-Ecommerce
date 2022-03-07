import React from 'react';
import Header from '@components/Header';
import ProductList from '../containers/ProductList';

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			<ProductList />
			{children}
		</div>
	);
}

export default Layout;