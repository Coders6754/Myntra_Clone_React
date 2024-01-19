import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice";

const myntrastore = configureStore({
  reducer: {
    items: itemsSlice.reducer
  }
});

export default myntrastore;