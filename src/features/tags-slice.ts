import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TagType } from "../types/tasks";
import  tagsService from "../services/tags.service";
import { AxiosError } from "axios";

type EditTag = {
  id: string;
  value: Partial<Omit<TagType, "id">>;
};
interface ValidationErrors {
  errorMessage: string;
  field_errors: Record<string, string>;
}
type TagState = {
  tags: TagType[];
  isLoading: boolean;
};

const initialState: TagState = {
  tags: [],
  isLoading: false,
};

export const getTags = createAsyncThunk("tags/getAll", tagsService.getAllTags);
export const updateTag = createAsyncThunk<
  TagType,
  { id: string } & Partial<TagType>,
  {
    rejectValue: ValidationErrors;
  }
>("tags/update", async (tagsData, { rejectWithValue }) => {
  try {
    const { id, ...rest } = tagsData;
  

    return tagsService.updateTag(id, rest);
  } catch (err:any) {
      const error: AxiosError<ValidationErrors> = err ; 
      if (!error.response) {
        throw err;
      }
    return rejectWithValue(error.response.data)
  }
});



const TagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag(state, action: PayloadAction<TagType>) {
      //to be defined
      state.tags.push(action.payload);
    },

    replaceTags(state, action: PayloadAction<TagType[]>) {
      state.tags = action.payload;
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
  extraReducers(builder) {
    builder.addCase(getTags.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tags = action.payload;
    });
    builder.addCase(getTags.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTag.fulfilled, (state, action) => {
      const newState = new Set( [...state.tags, action.payload])
      state.tags = Array.from(newState)
    });
  



  },
});

export const { addTag, editTag, replaceTags } = TagsSlice.actions;

export default TagsSlice.reducer;
