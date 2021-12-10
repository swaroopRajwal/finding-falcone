import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../axios/axiosInstance";

const initialState = {
  planets: [],
  loading: true,
};

const planets = createSlice({
  name: "planets",
  initialState,
  reducers: {
    addPlanets(state, action) {
      state.planets = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export default planets.reducer;
export const { addPlanets, setLoading } = planets.actions;

export const getPlanets = () => async (dispatch) => {
  const thisToast = toast.loading('getting planets')
  dispatch(setLoading(true));
  await axiosInstance
    .get("/planets")
    .then((res) => {
      dispatch(addPlanets(res.data));
      dispatch(setLoading(false));
      toast.success('done', {id:thisToast});
    })
    .catch((err) => {
      toast.error('refresh the page',{id:thisToast});
      console.log(err);
    });
};
