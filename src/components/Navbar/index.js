import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import Filter from '../Filter';

const styles = {
	root: {
		position: 'fixed',
		top: 0,
		right: 0,
		left: 0,
		zIndex: 1500,
	},
	drawer: {
		padding: '80px 20px',
	},
	title: {
		cursor: 'pointer',
	},
	search: {
		marginRight: '2rem',
		width: 200,
	},
	textColor: {
		color: '#eee'
	},
};

const Navbar = (props) => (
	<div>
		<Drawer
			docked={false}
			open={props.open}
			onRequestChange={props.onToggleDrawer}
			containerStyle={styles.drawer}
		>
			<Filter
				type="category"
				title="Category"
				items={props.categories}
				onToggle={props.onToggleFilter}
			/>
			<Filter
				type="cuisine"
				title="Cuisine"
				items={props.cuisines}
				onToggle={props.onToggleFilter}
			/>
		</Drawer>
		<AppBar
			title={
				<Link to="/" className="logo">
					<span style={styles.title}>React Recipe Box</span>
				</Link>
			}
			onLeftIconButtonTouchTap={props.onToggleDrawer}
			iconElementRight={
				<div>
					<FontIcon className="fa fa-search fa-fw" style={styles.textColor} />
					<TextField
						style={styles.search}
						hintText="Search..."
						onChange={props.onKeywordChange}
					/>
					<FlatButton
						label="Add New"
						style={styles.textColor}
						onTouchTap={props.onAddBtnClicked}
					/>
				</div>
			}
			style={styles.root}
		/>
	</div>
);

Navbar.propTypes = {
	open: PropTypes.bool.isRequired,
	categories: PropTypes.array,
	cuisines: PropTypes.array,
	onAddBtnClicked: PropTypes.func.isRequired,
	onToggleDrawer: PropTypes.func.isRequired,
	onToggleFilter: PropTypes.func.isRequired,
	onKeywordChange: PropTypes.func.isRequired,
};

export default Navbar;