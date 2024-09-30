import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appServices } from "../../../services/appservices";
import { ResultsInfoType } from "../../../models/dto";

const initialState: ResultsInfoType[] = await appServices.resultsService.getAllResults();

const resultsDataSlice = createSlice({
    name: 'resultsDataSlice',
    initialState,
    reducers:{
        setAllResults: (state, action: PayloadAction<ResultsInfoType[]>) => {
            state = action.payload;
            return state;
        },
        addResult: (state, action: PayloadAction<ResultsInfoType>) => {
            state.push(action.payload);
        },
        updateResult: (state, action) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            state[index] = action.payload;
        },
        removeResult: (state, action) => {
            state = state.filter((x) => x.id !== action.payload);
            return state;
        }
    }
});


export const ResultsDatareducer = resultsDataSlice.reducer;

export const {setAllResults, removeResult} = resultsDataSlice.actions;