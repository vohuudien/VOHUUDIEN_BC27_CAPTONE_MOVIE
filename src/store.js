import { configureStore } from "@reduxjs/toolkit";
import BannerSlice from "./modules/Home/slices/BannerSlice";

const store = configureStore({
  reducer: {
    banner: BannerSlice,
  },
});

export default store;
