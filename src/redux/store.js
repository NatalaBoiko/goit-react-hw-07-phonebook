import { configureStore } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';
import filter from './filter';
import contacts from './contacts';

export const store = configureStore({
  reducer: {
    filter,
    contacts,
  },
});

// const mySlice = createSlice({
//   name: 'myValue',
//   initialState: 0,
//   reducers: {
//     increment(state, action) {
//       return state + action.payload;
//     },
//     decrement(state, action) {
//       return state - action.payload;
//     },
//   },
// });
// {
//     contacts: {
//       items: [],
//       filter: ''
//     }
//   }

// console.log(mySlice);

// export const { increment, decrement } = mySlice.actions;

// export const store = configureStore({
//   reducer: {
//     myValue: mySlice.reducer,
//   },
// });
//==========================================
// const itemSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//     },
//     remove(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { add, remove } = itemSlice.actions;

// contacts: {
//     items: [],
//     filter: ''
//   }

// export const store = configureStore({
//   reducer: {
//     myValue: mySlice.reducer,
//     items: itemSlice.reducer,
//   },
// });

//==========================================

//==========================================

// import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const increment = createAction('myCounter/increment');
// export const decrement = createAction('myCounter/decrement');

// console.log(increment());
// console.log(increment.toString());

// const myReducer = createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// console.log(increment());
// console.log(increment.toString());

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   },
// });

//==========================================

// export const add = createAction('contacts/add');
// export const remove = createAction('contacts/remove');

// console.log(add);

// console.log(add());

// const contactsReducer = createReducer([], {
//   [add]: (state, action) => [...state, action.payload],
//   [remove]: (state, action) => state - action.payload,
// }); //or
// const contactsReducer = createReducer([], {
//   [add]: (state, action) => state.unShift(action.payload),
//   [remove]: (state, action) =>
//     state.filter(contact => contact.id !== action.payload),
// });
