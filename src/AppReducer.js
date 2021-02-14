import * as ACTIONS from './constants/actionTypes';

const AppReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.TOGGLE_SIDEBAR: {
			return { ...state, showSideBar: action.value };
		}
		case ACTIONS.SET_TOP_NAV: {
			let topNav = action.value === 0 ? 'summary' : 'comparison';
			return { ...state, topNavPick: topNav };
		}
		case ACTIONS.SET_SIDE_NAV: {
			return { ...state, sideNavPick: action.value };
		}
		case ACTIONS.SET_PEOPLE: {
			return { ...state, people: action.value };
		}
		default:
			return { ...state };
	}
};

export default AppReducer;
