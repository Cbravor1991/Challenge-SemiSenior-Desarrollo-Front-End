import { getLocalStorage, setLocalStorage } from "../../utilities";
import { LocalStorageTypes } from "../../models/localstorage";
import { createSlice, current } from '@reduxjs/toolkit';

const initialState = []

export const favoritesSlice = createSlice ({
    name: 'favorites',
    initialState: getLocalStorage(LocalStorageTypes.FAVORITES)? JSON.parse(localStorage.getItem(LocalStorageTypes.FAVORITES)): initialState,
    reducers: {
        addFavorite: (state, action) => {
            console.log("2020")
            setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
            return action.payload;
        },
        removeFavorite: (state, action) => {
            const filteredState = current(state).filter((p)=> p.id !== action.payload.id);
            setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
            return filteredState;
        }
    }
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
