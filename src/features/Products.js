import { createSlice } from "@reduxjs/toolkit";

import menscloth from "../datasource/mens_cloths";
import womencloth from "../datasource/women_cloths";
import watchdata from "../datasource/watch_data";
import shoedata from "../datasource/shoe_data";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    womencloth: womencloth,
    menscloth: menscloth,
    watchdata: watchdata,
    shoedata: shoedata,
  },
  reducers: {
    addFav: (state, action) => {
      if (action.payload.category == "Men") {
        const newState = Object.assign({}, state);
        newState.menscloth.map((p) => {
          if (p.id === action.payload.id) {
            p.isFav = !p.isFav;
          }
          state = newState;
        });
      }
      if (action.payload.category == "Women") {
        const newState = Object.assign({}, state);
        newState.womencloth.map((p) => {
          if (p.id === action.payload.id) {
            p.isFav = !p.isFav;
          }
          state = newState;
        });
      }
      if (action.payload.category == "Watch") {
        state.watchdata.map((p) => {
          if (p.id === action.payload.id) {
            p.isFav = !p.isFav;
          }
        });
      }
      if (action.payload.category == "Shoe") {
        state.shoedata.map((p) => {
          if (p.id === action.payload.id) {
            p.isFav = !p.isFav;
          }
        });
      }
    },
    addUser: (state, action) => {
      //addUserstate.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter(
        (user) => user.id !== action.payload.dataid
      );
    },

    updateUsername: (state, action) => {
      //alert(action.payload.data.category);
      if (action.payload.data.category == "Men") {
        state.menscloth.map((p) => {
          if (p.id === action.payload.data.id) {
            p.count += 1;
          }
        });
      } else if (action.payload.data.category == "Women") {
        state.womencloth.map((p) => {
          if (p.id === action.payload.data.id) {
            p.count += 1;
          }
        });
      } else if (action.payload.data.category == "Watch") {
        state.watchdata.map((p) => {
          if (p.id === action.payload.data.id) {
            p.count += 1;
          }
        });
      } else if (action.payload.data.category == "Shoe") {
        state.shoedata.map((p) => {
          if (p.id === action.payload.data.id) {
            p.count += 1;
          }
        });
      }
    },

    decProduct: (state, action) => {
      if (action.payload.data.category == "Men") {
        state.menscloth.map((p) => {
          if (p.id === action.payload.data.id) {
            p.count -= 1;
          }
        });
      } else if (action.payload.data.category == "Women") {
        state.womencloth.map((p) => {
          if (p.id === action.payload.data.id) {
            p.count -= 1;
          }
        });
      } else if (action.payload.data.category == "Watch") {
        state.watchdata.map((p) => {
          if (p.id === action.payload.data.id) {
            p.count -= 1;
          }
        });
      } else if (action.payload.data.category == "Shoe") {
        state.shoedata.map((p) => {
          if (p.id === action.payload.data.id) {
            p.count -= 1;
          }
        });
      }
    },
  },
  addFavorite: () => {
    alert("Hi");
  },
});

export const { addUser, decProduct, updateUsername, addFavorite, addFav } =
  productSlice.actions;
export default productSlice.reducer;
