import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from '../features/tags-slice';
import tasksReducer from '../features/tasks-slice';
export const store = configureStore({
  reducer:{
    tags: tagsReducer,
    tasks: tasksReducer
  }
})

export type AppDispatch = typeof store.dispatch;

export type RootSate = ReturnType<typeof store.getState>