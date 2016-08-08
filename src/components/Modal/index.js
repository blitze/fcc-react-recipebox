import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Modal = ({ children, handleSubmit, handleClose, title, open, submitBtnLabel = "Submit" }) => {
	const actions = [
		<FlatButton
			label="Cancel"
			primary={true}
			onTouchTap={handleClose}
			key="cancel"
		/>,
		<FlatButton
			label={submitBtnLabel}
			primary={true}
			keyboardFocused={true}
			onTouchTap={handleSubmit}
			key="submit"
		/>,
	];

	return (
		<Dialog
			title={title}
			actions={actions}
			modal={true}
			open={open}
			autoScrollBodyContent={true}
			autoDetectWindowHeight={true}
			repositionOnUpdate={true}
		>
			{children}
		</Dialog>
	);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	open: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	submitBtnLabel: PropTypes.string,
	handleSubmit: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired,
};

export default Modal;