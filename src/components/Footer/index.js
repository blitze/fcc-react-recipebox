import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import Crud from '../../containers/Crud';

import './styles.scss';

const Footer = () => (
	<div className="footer">
		<Crud />
		<div className="container">
			<Row>
				<Col xs>
					<a href="https://github.com/blitze/fcc-react-recipebox">View Source</a>
					<a href="https://github.com/blitze/fcc-react-recipebox/issues">Feedback/Issues</a>
					<Link to="/about">About Us</Link>
				</Col>
				<Col className="social" xs>
					<a href="https://github.com/blitze">
						<span className="fa-stack fa-lg">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-github fa-stack-1x fa-inverse"></i>
						</span>
					</a>
					<a href="https://codepen.io/blitze">
						<span className="fa-stack fa-lg">
							<i className="fa fa-circle fa-stack-2x"></i>
							<i className="fa fa-codepen fa-stack-1x fa-inverse"></i>
						</span>
					</a>
				</Col>
			</Row>
		</div>
	</div>
);

export default Footer;