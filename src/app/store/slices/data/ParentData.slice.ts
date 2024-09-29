import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParentInfoType } from "../../../models/dto/ParentInfoType";
import { appServices } from "../../../services/appservices";

const initialState: ParentInfoType[] = await appServices.parentService.getAllParents();

export const ParentDataSlice = createSlice({
    name: 'parentdataslice',
    initialState,
    reducers:{
        setAllParents: (state, action) => {
            state = action.payload;
            return state;
        },
        addParent: (state, action) => {
            state.push(action.payload);
        },
        updateParent: (state, action) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            state[index] = action.payload;
        },
        removeParent: (state, action: PayloadAction<number>) => {
            state = state.filter((x) => x.id !== action.payload);
            return state;
        }
    }
});


export const {setAllParents, removeParent} = ParentDataSlice.actions;