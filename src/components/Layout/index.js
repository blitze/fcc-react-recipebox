import React from 'react';
import Navigation from '../../containers/Navigation';
import Footer from '../Footer';

import './styles.scss';

const Layout = ({ contents }) => (
	<div>
		<Navigation />
		{contents}
		<Footer />
	</div>
);

Layout.propTypes = {
	contents: React.PropTypes.node.isRequired,
};

export default Layout;