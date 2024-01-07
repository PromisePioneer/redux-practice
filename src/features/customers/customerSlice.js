import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

console.log(customerSlice);

export default customerSlice.reducer;


// export default function customerReducer(state = initialState, action) {
//   switch (action.type) {
//     case "customers/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt,
//       };
//     case "customers/updateName":
//       return {
//         ...state,
//         fullName: action.payload,
//       };
//     default:
//       return state;
//   }
// }
//
// const createCustomer = function (fullName, nationalID) {
//   return {
//     type: "customers/createCustomer",
//     payload: {
//       fullName,
//       nationalID,
//       createdAt: new Date().toString(),
//     },
//   };
// };
//
// const updateName = function (fullName) {
//   return {
//     type: "accounts/updateName",
//     payload: fullName,
//   };
// };

// export { createCustomer, updateName };
