import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import AppFooter from '../../views/AppFooter';
import ProductHero from '../../views/ProductHero';
import ProductCategories from '../../views/ProductCategories';

import Header from '../layout/Header';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default function Home() {
	const { userData } = useContext(UserContext);
	const history = useHistory();

	useEffect(() => {
		if (!userData.user) history.push('/login');
	});
	return (
		<div className="page">
			<ProductHero />
			<ProductCategories />
			<AppFooter />
		</div>
	);
}
