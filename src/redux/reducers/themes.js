import { TOGGLE_DARK_THEME } from '../types';

const initialState = {
	isDarkTheme: false
};

const themeReducer = (state = initialState, action) => {
	const { type } = action;

	switch (type) {
		case TOGGLE_DARK_THEME:
			return {
				...state,
				isDarkTheme: !state.isDarkTheme
			};

		default:
			return state;
	}
};

export default themeReducer;
