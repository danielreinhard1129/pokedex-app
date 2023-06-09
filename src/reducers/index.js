import { configureStore } from "@reduxjs/toolkit";
import favourite from "./favourite";

const globalStore = configureStore({
    reducer: {
        favourite,
    }
})

export default globalStore;