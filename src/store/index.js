import { configureStore } from '@reduxjs/toolkit';
import drawerSlice from './reducers/drawer-slice';

const store = configureStore({
    reducer:{
        drawer: drawerSlice.reducer
    }
});

export default store;