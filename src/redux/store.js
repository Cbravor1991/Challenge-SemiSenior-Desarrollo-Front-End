import {configureStore} from '@reduxjs/toolkit'
import { postsSlice } from './states/posts';
import {favoritesSlice} from './states/favorites'

const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
        favorites: favoritesSlice.reducer
    }
});

export default store;