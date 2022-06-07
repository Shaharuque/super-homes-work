import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiInitialValue } from "../../../../Misc/client";
import { baseClient } from "../../../../Misc/client";



//Single Member Fetching Fuction
//=====================================================================================================//
//async action(getMemberData) to fetch member data depending on Member ID
export const getMemberData = createAsyncThunk("memberdata/getMemberData", async (memberId) => {
  const response =await baseClient.get('member_in_details?id='+memberId);
  return response.data.data;
});

//Single Member DATA Slice
const memberDataSlice = createSlice({
  name: "memberdata",  //slice name
  initialState: apiInitialValue, //slice initial value
  reducers: {},                  //sync action methods

  //async action creator
  extraReducers: (builder) => {
    builder.addCase(getMemberData.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getMemberData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = action.payload;
    });
    builder.addCase(getMemberData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = "";
    });
  },
});


export const memberDataReducer = memberDataSlice.reducer; //sliceName.reducer
//=====================================================================================================//




//Search Member Function
//=====================================================================================================//
//async action to Search member data
export const searchMemberData = createAsyncThunk("searchMember/searchMemberData", async ({page=1,searchType,TRXStatus,keyword}) => {
  console.log(searchType);
  const response =await baseClient.get('search_member?page='+page+'&search_value='+searchType+'&check_transaction='+TRXStatus+'&value='+keyword);
  return response.data;
});

//All Member DATA Slice
const searchMemberDataSlice = createSlice({
  name: "searchMember",
  initialState: apiInitialValue,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(searchMemberData.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(searchMemberData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = action.payload;
    });
    builder.addCase(searchMemberData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = "";
    });
  },
});


export const searchMemberDataReducer = searchMemberDataSlice.reducer;



//Get member packages depending on members booking id and member id
//=====================================================================================================//
//async action to Search each member packages data
export const getMemberPackages = createAsyncThunk("getMemberPackage/getMemberPackages", async ({member_Packages_CurrentPage,member_id,member_Booking_id}) => {

  const response =await baseClient.get('get_member_packages?page='+member_Packages_CurrentPage+'&id='+member_id+'&package_id='+member_Booking_id);
  return response;
});

// each Member package DATA Slice
const getMemberPackageDataSlice = createSlice({
  name: "getMemberPackage",
  initialState: apiInitialValue,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getMemberPackages.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getMemberPackages.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = action.payload;
    });
    builder.addCase(getMemberPackages.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = "";
    });
  },
});


export const getMemberPackageDataReducer = getMemberPackageDataSlice.reducer;
//=====================================================================================================//


//=====================================================================================================//


//Get member Transiction details depending on members booking id and member id
//=====================================================================================================//
//async action to Search each member Transiction detail data
export const getMemberTransiction = createAsyncThunk("getTransiction/getMemberTransiction", async ({memberBookingId,memberId,transactionCurrentPage}) => {

  const response =await baseClient.get('member_transaction_details?booking_id='+memberBookingId+'&member_id='+memberId+'&page='+transactionCurrentPage);
  return response;
});

// each Member Transiction detail DATA Slice
const getMemberTransictionSlice = createSlice({
  name: "getTransiction",
  initialState: apiInitialValue,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getMemberTransiction.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getMemberTransiction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = action.payload;
    });
    builder.addCase(getMemberTransiction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = "";
    });
  },
});


export const getMemberTransictionReducer = getMemberTransictionSlice.reducer;
//=====================================================================================================//


//Get member Refreshment_items 
//=====================================================================================================//
//async action to Search refreshment items for each member
export const getMemberRefreshmentItem = createAsyncThunk("getRefreshmentItem/getMemberRefreshmentItem", async ({memberBookingId,refreshmentItemsCurrentPage}) => {

  const response =await baseClient.get('get_member_refreshment_items?page='+refreshmentItemsCurrentPage+'&booking_id='+memberBookingId);
  return response.data;
});

// each Member RefreshmentItem DATA Slice
const getMemberRefreshmentItemSlice = createSlice({
  name: "getRefreshmentItem",
  initialState: apiInitialValue,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getMemberRefreshmentItem.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getMemberRefreshmentItem.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = action.payload;
    });
    builder.addCase(getMemberRefreshmentItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = "";
    });
  },
});


export const getMemberRefreshmentItemsReducer = getMemberRefreshmentItemSlice.reducer;
//=====================================================================================================//


//Get single member meal info 
//=====================================================================================================//
//async action to Search single member meal info
export const getMemberMealDetails = createAsyncThunk("getMemberMealInfo/getMemberMealDetails", async ({memberBookingId,memberId,mealCurrentPage}) => {

  const response =await baseClient.get('member_meals_data?booking_id='+memberBookingId+'&member_id='+memberId+'&page='+mealCurrentPage);
  return response.data;
});

//single member meal info DATA Slice
const getMemberMealInfoSlice = createSlice({
  name: "getMemberMealInfo",
  initialState: apiInitialValue,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getMemberMealDetails.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getMemberMealDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = action.payload;
    });
    builder.addCase(getMemberMealDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = "";
    });
  },
});


export const getMemberMealReducerReducer = getMemberMealInfoSlice.reducer;
//=====================================================================================================//

//Get single member bedChange info 
//=====================================================================================================//
//async action to Search single member bedChange info
export const getMemberBedChange= createAsyncThunk("getMemberBedChangeDetails/getMemberBedChange", async ({memberBookingId,memberId}) => {

  const response =await baseClient.get('bed_change_info?booking_id='+memberBookingId+'&member_id='+memberId);
  return response.data.data;
});

//single member meal info DATA Slice
const getMemberBedChangeSlice= createSlice({
  name: "getMemberBedChangeDetails",
  initialState: apiInitialValue,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getMemberBedChange.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getMemberBedChange.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = action.payload;
    });
    builder.addCase(getMemberBedChange.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = "";
    });
  },
});


export const getMemberBedChangeReducer = getMemberBedChangeSlice.reducer;
//=====================================================================================================//


//Get single member Package Shifting info 
//=====================================================================================================//
//async action to Search single member Package Shifting info
export const getMemberPackageChange= createAsyncThunk("getMemberPackageShiftDetails/getMemberPackageChange", async ({memberBookingId,memberId}) => {

  const response =await baseClient.get('package_shifting_info?booking_id='+memberBookingId+'&member_id='+memberId);
  return response.data;
});

//single member Package shift info DATA Slice
const getMemberPackageShiftingSlice= createSlice({
  name: "getMemberPackageShiftDetails", //slice name
  initialState: apiInitialValue,
  reducers: {},

  //async action creator
  extraReducers: (builder) => {
    builder.addCase(getMemberPackageChange.pending, (state) => {
      state.loading = true;
      state.error = {};
    });
    builder.addCase(getMemberPackageChange.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = action.payload;
    });
    builder.addCase(getMemberPackageChange.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = "";
    });
  },
});


export const getMemberPackageShiftReducer = getMemberPackageShiftingSlice.reducer;
//=====================================================================================================//


// ----------------------------------------------
// -----------------------------------------------
//searched member data pawa geley sheita export korey dissi(amr movies redux project follow korey ai kaj korsilam)
// export const getSearchedMembersData=(state)=>state.searchMember.data




