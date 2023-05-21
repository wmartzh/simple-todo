import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TagType } from "../types/tasks";


type EditTag = {
  id: string;
  value: Partial<Omit<TagType, "id">>;
};

type TagState = TagType[];

const initialState: TagState = [];

const TagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag(state, action: PayloadAction<TagType>) {
      state.push(action.payload);
    },
    editTag(state, action: PayloadAction<EditTag>) {
      const index = state.findIndex((e) => e.id === action.payload.id);
      const { color, name} = action.payload.value
      if (color) {
        state[index].color = color;
      }
      if (name !== undefined) {
        state[index].name = name;
      }
    },
  },
});

export const { addTag, editTag } = TagsSlice.actions;

export default TagsSlice.reducer;
