import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { addContactSlice } from './addContactSlice';
import { filterContactSlice } from './filterContactsSlice';
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

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const reducer = combineReducers({
  contacts: addContactSlice.reducer,
  filter: filterContactSlice.reducer,
});

const persistedContactsReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
