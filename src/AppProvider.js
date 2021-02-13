import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	data: {},
	sideNavPick: 'planets',
	topNavPick: '',
	showSideBar: true,
};

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default AppProvider;
