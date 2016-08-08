import React, { PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const ContextMenu = ({ recipeId, featured, onSelectAction }) => (
	<IconMenu
		className="context-menu"
		iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
		anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
		targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
		desktop={true}
		onItemTouchTap={onSelectAction}
	>
		<MenuItem primaryText={featured ? "Unfeature" : "Feature"} value={`feature-${recipeId}`} />
		<MenuItem primaryText="Edit" value={`edit-${recipeId}`} />
		<MenuItem primaryText="Delete" value={`delete-${recipeId}`} />
	</IconMenu>
);

ContextMenu.propTypes = {
	recipeId: PropTypes.string.isRequired,
	featured: PropTypes.bool.isRequired,
	onSelectAction: PropTypes.func.isRequired,
};

export default ContextMenu;