import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import './styles.scss';

const styles = {
	checkbox: {
		marginBottom: 10,
	},
};

let count = 0;

const ListItem = ({ item, reset, showSteps }) => {
	if (item.substring(0, 2) === '--') {
		count = 0;
		return (<h3 className="label">{item.replace('--', '')}</h3>);
	} else {
		let label = item;
		let desc = '';
		if (showSteps) {
			count = reset ? 1 : ++count;
			label = <span className="step">{'Step ' + count}</span>;
			desc = <p>{item}</p>;
		}
		return (
			<div>
				<Checkbox
				label={label}
				style={styles.checkbox}
			/>
				{desc}
			</div>
		);
	}
};

ListItem.propTypes = {
	item: PropTypes.string.isRequired,
	reset: PropTypes.bool.isRequired,
	showSteps: PropTypes.bool.isRequired,
};

export default ListItem;