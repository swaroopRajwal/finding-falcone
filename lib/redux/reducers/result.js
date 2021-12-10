import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../axios/axiosInstance";

const initialState = {
  selected: [
    {
      journey: "one",
      planet: null,
      vehicle: null,
      time: null,
    },
    {
      journey: "two",
      planet: null,
      vehicle: null,
      time: null,
    },
    {
      journey: "three",
      planet: null,
      vehicle: null,
      time: null,
    },
    {
      journey: "four",
      planet: null,
      vehicle: null,
      time: null,
    },
  ],
  result: {
    status: null,
    planet: null,
    show: false,
  },
};

const result = createSlice({
  name: "result",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    updateSelectedVehicle(state, action) {
      state.selected[
        state.selected.findIndex(
          (item) => item.journey === action.payload.journey
        )
      ].vehicle = action.payload.vehicle;
    },
    updateSelectedPlanet(state, action) {
      state.selected[
        state.selected.findIndex(
          (item) => item.journey === action.payload.journey
        )
      ].planet = action.payload.planet;
    },
    updateTime(state, action) {
      state.selected[
        state.selected.findIndex(
          (item) => item.journey === action.payload.journey
        )
      ].time = action.payload.time;
    },
    updateResult(state, action) {
      if (action.payload.status === "false") {
        state.result.status = false;
        state.result.show = true;
        return;
      }
      state.result.status = true;
      state.result.planet = action.payload.planet_name;
      state.result.show = true;
    },
    clear(state) {
      state.result = initialState.result;
      state.selected = initialState.selected;
    }
  },
});

export default result.reducer;
export const {
  setToken,
  updateSelectedVehicle,
  updateSelectedPlanet,
  updateTime,
  updateResult,
  clear,
} = result.actions;

export const getToken = (selection) => async (dispatch) => {
  await axiosInstance
    .post("/token")
    .then((res) => {
      // dispatch(setToken(res.data.token));
      dispatch(getResult(selection, res.data.token));
    })
    .catch((err) => console.log(err));
};

export const getResult = (selection, token) => async (dispatch) => {
  const thisToast = toast.loading('journey started :)')
  const body = {
    token: token,
    planet_names: selection.map((item) => item.planet),
    vehicle_names: selection.map((item) => item.vehicle),
  };

  const config = {
    method: "POST",
    url: "/find",
    data: body,
  };
  await axiosInstance(config)
    .then((res) => {
      dispatch(updateResult(res.data));
      toast.success('journey finished', {id:thisToast})
    }).catch((err) => {
      toast.error('failed', {id:thisToast})
      console.log(err.response)
    });
};
