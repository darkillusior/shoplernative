import { configureStore, createSlice } from "@reduxjs/toolkit";


const globalState = createSlice({

    name: 'counter',
    initialState: { value:null},
    
    reducers: {
         signin(state,action){
          state.value = action.payload     
        }
    }
})

export const actions = globalState.actions
const store = configureStore({
    reducer: globalState.reducer
})
export default store