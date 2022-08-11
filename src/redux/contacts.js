import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // setFilter: (state, action) => {
    //   state.value = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const {} = contactsSlice.actions;

export default contactsSlice.reducer;

// // import { configureStore } from '@reduxjs/toolkit';

// // const itemSlice = createSlice({
// //   name: 'items',
// //   initialState: [],
// //   reducers: {
// //     add(state, action) {
// //       state.push(action.payload);
// //     },
// //     remove(state, action) {
// //       return state.filter(item => item.id !== action.payload);
// //     },
// //   },
// // });
