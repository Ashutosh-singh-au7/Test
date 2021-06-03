import { createSlice } from '@reduxjs/toolkit';

const drawerSlice = createSlice({
    name: 'drawer', 
    initialState:{
        drawer: false,
    },
    reducers:{
        setVisible(state ,action){
            state.drawer = action.payload.drawer;
        }
    }
});

export const drawerActions = drawerSlice.actions;
export default drawerSlice;