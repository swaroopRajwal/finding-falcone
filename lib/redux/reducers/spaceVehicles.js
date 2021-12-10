import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../axios/axiosInstance";
const initialState = {
  vehicles: [],
  loading: true,
};
const spaceVehicle = createSlice({
  name: "spaceVehicle",
  initialState,
  reducers: {
    addVehicles(state, action) {
      state.vehicles = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    updateVehicle(state, action) {
      state.vehicles.find(
        (vehicle) => vehicle.name === action.payload.name
      ).total_no += action.payload.count;
    },
  },
});

export default spaceVehicle.reducer;
export const {
  addVehicles,
  setLoading,
  updateVehicle,
} = spaceVehicle.actions;

export const getVehicles = () => async (dispatch) => {
  const thisToast = toast.loading('getting vehicles');
  axiosInstance
    .get("/vehicles")
    .then((res) => {
      dispatch(addVehicles(res.data));
      dispatch(setLoading(false));
      toast.success('done', {id:thisToast})
    })
    .catch((err) => {
      toast.error('refresh the page',{id:thisToast});
      console.log(err);
    });
};
