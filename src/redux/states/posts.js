import { getLocalStorage, setLocalStorage } from "../../utilities";
import {createSlice} from '@reduxjs/toolkit';
import { LocalStorageTypes } from "../../models/localstorage";

const initialState = [];


export const postsSlice = createSlice ({
    name: 'posts',
    initialState: getLocalStorage(LocalStorageTypes.POSTS)?JSON.parse(localStorage.getItem(LocalStorageTypes.PEOPLE)) : initialState,
    reducers: {
        addPost: (state,action) => {
        

           
            setLocalStorage(LocalStorageTypes.POSTS, state);
            return action.payload;

        },
    }
    });

export const {addPost} = postsSlice.actions;
export default postsSlice.reducer;