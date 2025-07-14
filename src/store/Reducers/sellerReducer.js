import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../api/api"


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


export const sellerReducer = createSlice({

   name: 'seller',
   initialState: {
      successMessage: '',
      errorMessage: '',
      loader: false,
      sellers : [],
      totalSeller : 0
   },
   reducers: {

      messageClear: (state, _) => {
         state.errorMessage = "";
      }

   },
   extraReducers: (builder) => {

    //   builder
        
        //  .addCase(get_category.fulfilled, (state, { payload }) => {
        //     state.totalCategory = payload.totalCategory;
        //     state.categorys = payload.category;
        //  })
   }
})
export const { messageClear } = sellerReducer.actions
export default sellerReducer.reducer;