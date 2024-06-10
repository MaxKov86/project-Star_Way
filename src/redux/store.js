import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReduser from './theme/slice';
import authReduser from './auth/slice';
import boardsReduser from './boards/slice';

const themePersistCfg = {
	key: 'theme',
	storage,
	whiteList: ['value'],
};

const persistThemeReduser = persistReducer(themePersistCfg, themeReduser);

const authPersistConfig = {
	key: 'authSlice',
	storage,
	whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReduser);

export const store = configureStore({
	reducer: {
		boards: boardsReduser,
		theme: persistThemeReduser,
		auth: persistedAuthReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
