import { createSlice } from "@reduxjs/toolkit"


const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, // 'PENDING' amd 'DONE'
    currentylFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      return state.currentylFetching = true;
    },
    markFetchingFinished: (state) => {
      return state.currentylFetching = false;
    }
  }
});

export const fetchStatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;


