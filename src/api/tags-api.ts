import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL, TAGS_BASE } from './defaults'
import { TagType } from '../types/tasks'


export const tagsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

  }),
  endpoints(builder) {
    return {
       fetchTags : builder.query<TagType[], string|number>({
          query(){
            return TAGS_BASE
          }
       })
    }
  }

})