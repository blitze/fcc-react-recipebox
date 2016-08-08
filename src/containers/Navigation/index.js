import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { selectFilters } from './selectors';
import { toggleDrawer } from './actions';
import { showForm, toggleFilter, searchKeyword } from '../HomePage/actions';
import Navbar from '../../components/Navbar';

const mapStateToProps = (state) => ({
	open: state.navigation.open,
	...selectFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
	onAddBtnClicked: () => {
		dispatch(showForm());
	},
	onToggleDrawer: () => {
		dispatch(toggleDrawer());
	},
	onToggleFilter: (type, filter) => () => {
		dispatch(toggleFilter(type, filter));
		browserHistory.push("/");
	},
	onKeywordChange: (event) => {
		const keyword = event.target.value;
		if (!keyword || keyword.length > 2) {
			dispatch(searchKeyword(keyword));
		}
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);