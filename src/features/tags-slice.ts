import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TagType } from "../types/tasks";
import { getAllTags } from "../services/tags.service";

type EditTag = {
  id: string;
  value: Partial<Omit<TagType, "id">>;
};

type TagState = {
  tags: TagType[]
}

const initialState: TagState ={
  tags:[]
}

const TagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag(state, action: PayloadAction<TagType>) {
      //to be defined
      state.tags.push(action.payload)
    },

    replaceTags(state, action: PayloadAction<TagType[]>) {
      state.tags = action.payload
    },


    editTag(state, action: PayloadAction<EditTag>) {
      const index = state.tags.findIndex((e) => e.id === action.payload.id);
      const { color, name } = action.payload.value;
      if (color) {
        state.tags[index].color = color;
      }
      if (name !== undefined) {
        state.tags[index].name = name;
      }
    },
  },
});

export const { addTag, editTag, replaceTags } = TagsSlice.actions;

export default TagsSlice.reducer;
