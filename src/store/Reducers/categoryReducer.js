import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../api/api"

export const categoryAdd = createAsyncThunk(
   'auth/categoryAdd',
   async ({name,image}, { rejectWithValue, fulfillWithValue }) => {
      try {
          
         const formData = new FormData();
         formData.append('name',name);
         formData.append('image',image);

         const { data } = await api.post('/category-add', formData, { withCredentials: true })
         console.log(data)
         return fulfillWithValue(data);
      } catch (error) {
         return rejectWithValue(error.response.data)

      }
   }
)

// End Method

export const get_category = createAsyncThunk(
   'category/get_category',
   async ({parPage, page, searchValue}, { rejectWithValue, fulfillWithValue }) => {
      try {
         const { data } = await api.get(`/category-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`, { withCredentials: true })
         console.log(data)
         return fulfillWithValue(data);
      } catch (error) {
         return rejectWithValue(error.response.data)

      }
   }
)


export const categoryReducer = createSlice({

   name: 'category',
   initialState: {
      successMessage: '',
      errorMessage: '',
      loader: false,
      categorys : [],
      totalCategory : 0
   },
   reducers: {

      messageClear: (state, _) => {
         state.errorMessage = "";
      }

   },
   extraReducers: (builder) => {

      builder
         .addCase(categoryAdd.pending, (state, { payload }) => {
            state.loader = true;
         })
         .addCase(categoryAdd.rejected, (state, { payload }) => {
            state.loader = false;
            state.errorMessage = payload.error;
         })
         .addCase(categoryAdd.fulfilled, (state, { payload }) => {
            state.loader = false;
            state.successMessage = payload.message;
            state.categorys = [...state.categorys, payload.category]
         })
         .addCase(get_category.fulfilled, (state, { payload }) => {
            state.totalCategory = payload.totalCategory;
            state.categorys = payload.category;
         })
   }
})
export const { messageClear } = categoryReducer.actions
export default categoryReducer.reducer;