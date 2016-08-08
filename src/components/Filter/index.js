import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';

const Filter = ({ type, title, items, onToggle }) => {
	if (!items.length) {
		return '';
	}
	return (
		<List>
			<Subheader>{title}</Subheader>
			{items.map((filter, idx) => (
			<ListItem key={idx}
				leftCheckbox={
					<Toggle
						label={filter}
						labelPosition="right"
						onToggle={onToggle(type, filter)}
					/>
				}
			/>
			))}
		</List>
	);
};

Filter.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	items: PropTypes.array.isRequired,
	onToggle: PropTypes.func.isRequired,
};

export default Filter;