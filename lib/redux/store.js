import { configureStore } from "@reduxjs/toolkit";
import planets from "./reducers/planets";
import result from "./reducers/result";
import spaceVehicles from "./reducers/spaceVehicles";

const store = configureStore({
  reducer: {
    planets,
    result,
    vehicles: spaceVehicles,
  }
})

export default store;