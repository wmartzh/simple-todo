import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from '../features/TagsSlice';
export const store = configureStore({
  reducer:{
    tags: tagsReducer,
  }
})

export type AppDispatch = typeof store.dispatch;

export type RootSate = ReturnType<typeof store.getState>