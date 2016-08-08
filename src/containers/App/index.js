import React from 'react';

// material-ui
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from '../../components/Layout';

const muiTheme = getMuiTheme({
	palette: {
		accentColor: deepOrange500,
	},
});

const App = (props) => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<Layout contents={props.children} />
	</MuiThemeProvider>
);

App.propTypes = {
	children: React.PropTypes.node.isRequired,
};

export default App;