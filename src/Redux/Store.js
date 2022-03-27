// export const store = configureStore({
//   reducer: {
//     data: counterReducer,
//   },
// });

import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import allData from "./Actions";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel1,
  whiteList: ["allData"],
};

const reducers = combineReducers({
  allData,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
