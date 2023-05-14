import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Tag {
  id: string;
  color: string;
  name: string;
}

type EditTag = {
  id: string;
  color?: string;
  name?: string;
};

type TagState = Tag[];

const initialState: TagState = [];

const TagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag(state, action: PayloadAction<Tag>) {
      state.push(action.payload);
    },
    editTag(state, action: PayloadAction<EditTag>) {
      const index = state.findIndex((e) => e.id === action.payload.id);
      if (action.payload.color) {
        state[index].color = action.payload.color;
      }
      if (action.payload.name !== undefined) {
        state[index].name = action.payload.name;
      }
    },
  },
});

export const { addTag, editTag } = TagsSlice.actions;

export default TagsSlice.reducer;
