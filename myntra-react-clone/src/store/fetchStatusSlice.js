import { createSlice } from "@reduxjs/toolkit"


const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone:'PENDING', // 'PENDING' amd 'DONE'
    currentylFetching:false,
  },
  reducers: {
    markFetchDone: (store, action) => {
      return store;
    },
    markFetchingStarted: (store, action) => {
      return store;
    },
    markFetchingFinished: (store, action) => {
      return store;
    }
  }
});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;


