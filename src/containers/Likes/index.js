import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { toggleLike } from './actions';

const styles = {
	checkbox: {
		display: 'inline-block',
		fontSize: '1.2rem',
		margin: '10px',
		width: 'auto',
	},
};

const Likes = ({ likes, voted, onToggleLike }) => (
	<Checkbox
		style={styles.checkbox}
		checkedIcon={<ActionFavorite />}
		uncheckedIcon={<ActionFavoriteBorder  />}
		label={likes}
		defaultChecked={voted}
		onCheck={onToggleLike}
    />
);

Likes.propTypes = {
	likes: PropTypes.number,
	voted: PropTypes.bool.isRequired,
	onToggleLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
	likes: state.likes.recipes[ownProps.id] || 0,
	voted: (state.likes.voted.indexOf(ownProps.id) > -1),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onToggleLike: () => {
		dispatch(toggleLike(ownProps.id));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Likes);