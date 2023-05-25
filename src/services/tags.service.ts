import { TagType } from "../types/tasks";
import axiosInstance from "./axios";

const TAGS_PATH = "/tags"
 async function createTag(tag: Omit<TagType,'id'>){
  try {

    const response = await  axiosInstance.post(TAGS_PATH, tag);
    return response.data satisfies TagType
  } catch (error) {

    console.log('◉ ▶ file: tags.service.ts:8 ▶ createTag ▶ error:', error);
    
  }
}
 async function updateTag(id:string, tag: Partial<Omit<TagType,'id'>>){
  try {

    const response = await  axiosInstance.put(`${TAGS_PATH}/${id}`, tag);
    return response.data satisfies TagType
  } catch (error) {

    console.log('◉ ▶ file: tags.service.ts:8 ▶ createTag ▶ error:', error);
    
  }
}

 async function getAllTags(){
  try {
    const response = await axiosInstance.get(TAGS_PATH);

    console.log('◉ ▶ file: tags.service.ts:21 ▶ getAllTags ▶ response:', response);
    return response.data;
  } catch (error) {

    console.log('◉ ▶ file: tags.service.ts:22 ▶ getAllTags ▶ error:', error);
    
  }
}

export default {
  getAllTags,
  updateTag,
  createTag
}