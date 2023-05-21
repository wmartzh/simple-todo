import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "../features/tags-slice";
import tasksReducer from "../features/tasks-slice";
import { tagsApi } from "../api/tags-api";
export const store = configureStore({
  reducer: {
    tags: tagsReducer,
    tasks: tasksReducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(tagsApi.middleware)
  }
});

export type AppDispatch = typeof store.dispatch;

export type RootSate = ReturnType<typeof store.getState>;
