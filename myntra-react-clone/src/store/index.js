import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const myntrastore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus : fetchStatusSlice.reducer,
  }
});

export default myntrastore;