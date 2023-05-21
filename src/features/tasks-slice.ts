import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TagType, TaskType } from "../types/tasks";


export interface EditTask {
  id: string;
  value: Omit<TaskType,'id'>
}
export type TaksState = TaskType[]

const initialState: TaksState = []

const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers:{
    addTask(state, action: PayloadAction<TaskType>){
      state.push(action.payload)
    },
    editTask(state, action: PayloadAction<EditTask>){
      const{payload} = action;
     
      const i =  state.findIndex(el=> el.id=== payload.id);
      state[i] = { id: payload.id, ...state, ...payload.value };
    },
  }
})


export const {addTask, editTask } = TasksSlice.actions;

export default TasksSlice.reducer