import formReducer from "./reducers/formReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: formReducer,
});

export { store };
