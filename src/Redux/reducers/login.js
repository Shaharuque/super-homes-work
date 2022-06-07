import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { csrfClient } from "../../Misc/client";
import { apiInitialValue } from "../../Misc/client";

//Otp Related Fuction. Sends OTP
const loginOTPSlice = createSlice({
  name: "loginOTP",
  initialState: apiInitialValue,
  reducers: {
    loginOTPstart: (state) => {
      state.loading = true;
    },
    loginOTPdata: (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    loginOTPerror: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
const { loginOTPstart, loginOTPdata, loginOTPerror } = loginOTPSlice.actions;
export const loginSendOtp = (e) => async (dispatch) => {
  dispatch(loginOTPstart());
  try {
    const data = await csrfClient.post("send_otp", e);
    dispatch(loginOTPdata(data.data));
    if (data.data.status) {
      toast.success(`OTP Sent ${data.data.otp}`, { theme: "dark" });
    } else {
      toast.error(`Wrong Combination`, { theme: "dark" });
    }
  } catch (err) {
    dispatch(loginOTPerror(err.message));
  }
};

//Login Related Fuction. Checks OTP and Logs In
const loginSlice = createSlice({
  name: "login",
  initialState: apiInitialValue,
  reducers: {
    loginstart: (state) => {
      state.loading = true;
    },
    logindata: (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    },
    loginerror: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
const { loginstart, logindata, loginerror } = loginSlice.actions;
export const login = (e) => async (dispatch) => {
  dispatch(loginstart());
  try {
    const data = await csrfClient.post("send_otp", e);
    dispatch(logindata(data.data));
    if (data.data.status === true) {
      localStorage.clear();
      localStorage.setItem("EmployeeName", data.data.name);
      localStorage.setItem("EmployeeToken", e.otp);
      localStorage.setItem("EmployeeId", data.data.employee_id);
    }
  } catch (err) {
    dispatch(loginerror(err.message));
  }
};

export const loginOTPReducer = loginOTPSlice.reducer;
export const loginReducer = loginSlice.reducer;
