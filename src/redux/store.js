import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReduser from './theme/slice';

const themePersistCfg = {
	key: 'theme',
	storage,
	whiteList: ['value'],
};

const persistThemeReduser = persistReducer(themePersistCfg, themeReduser);

export const store = configureStore({
	reducer: {
		theme: persistThemeReduser,
	},
});

export const persistor = persistStore(store);
