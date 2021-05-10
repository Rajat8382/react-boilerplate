import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Container } from './styled-components/Container';

const DarkThemeProvider = ({ children, isDarkTheme }) => {
	return (
		<ThemeProvider theme={{ theme: isDarkTheme ? 'dark' : 'light' }}>
			<Container>{children}</Container>
		</ThemeProvider>
	);
};

const mapStateToProps = (state) => ({
	isDarkTheme: state.theme.isDarkTheme
});

export default connect(mapStateToProps)(DarkThemeProvider);
