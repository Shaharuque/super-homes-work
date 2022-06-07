import { configureStore } from "@reduxjs/toolkit";
import { loginOTPReducer, loginReducer } from "./reducers/login";
import sidebarReucer from "./reducers/sidebar";
import {
  memberDataReducer,
  searchMemberDataReducer,
  getMemberPackageDataReducer,
  getMemberTransictionReducer,
  getMemberRefreshmentItemsReducer,
  getMemberMealReducerReducer,
  getMemberBedChangeReducer,
  getMemberPackageShiftReducer,
} from "../Features/CRM/Member_Directory/logic/member_directory.redux";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReucer,
    login: loginReducer,
    loginOTP: loginOTPReducer,
    memberdata: memberDataReducer,
    searchMember: searchMemberDataReducer,
    getMemberPackageInfo: getMemberPackageDataReducer,
    getSingleMemberTransiction: getMemberTransictionReducer,
    getSingleMemberRefrementItems:getMemberRefreshmentItemsReducer,
    getSingleMemberDiningDetails:getMemberMealReducerReducer,
    getSingleMemberBedChangingDetails:getMemberBedChangeReducer,
    getSingleMemberPackageChangingDetails:getMemberPackageShiftReducer,
  },
});
