import { configureStore } from "@reduxjs/toolkit";
import restaurantslice from "./restaurantslice";

const appStore = configureStore({
  reducer: {
    restaurant: restaurantslice,
  },
});

export default appStore;
