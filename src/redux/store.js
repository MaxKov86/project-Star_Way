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

const themePersistCfg = {
	key: 'theme',
	storage,
	whitelist: ['value'],
};

const persistThemeReduser = persistReducer(themePersistCfg, themeReduser);

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};
const persistdAuthReducer = persistReducer(authPersistConfig, authReduser);

export const store = configureStore({
	reducer: {
		boards: boardsReduser,
		columns: columnsReduser,
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
