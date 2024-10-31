import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export interface BonfireSliceState {
    show: boolean;
    radio: string
    stepone: boolean
    steptwo: boolean
    text: string
}

const initialState: BonfireSliceState = {
  show: true,
  radio: '',
  stepone: true,
  steptwo: false,
  text: ''
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const bonfireSlice = createAppSlice({
  name: "showbonfire",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  
  reducers:{
    bonfireShow: (state, action: PayloadAction<boolean>) => {
        state.show = action.payload
      },
    bonfireRadioButton: (state, action: PayloadAction<string>) => {
        console.log('redux', state.radio)
        state.radio = action.payload
        console.log('reduxAfter', state.radio)


    },
    bonfireStepOne: (state, action: PayloadAction<boolean>) =>{
        state.stepone = action.payload
    },
    bonfireStepTwo: (state, action: PayloadAction<boolean>) =>{
        state.steptwo = action.payload
    },
    bonfireText: (state, action: PayloadAction<string>) => {
        state.text = action.payload
    }
    }
  })

// Action creators are generated for each case reducer function.
export const { bonfireShow , bonfireRadioButton, bonfireStepOne, bonfireStepTwo, bonfireText} = bonfireSlice.actions;
export const bonfireReducer = bonfireSlice.reducer
