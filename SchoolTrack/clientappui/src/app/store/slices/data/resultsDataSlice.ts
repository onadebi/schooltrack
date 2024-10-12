import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appServices } from "../../../services/appservices";
import { ResultsInfoType } from "../../../models/dto";

export const fetchAllResults = createAsyncThunk(
    'results/fetchAll',
    async () => {
        const response = await appServices.resultsService.getAllResults();
        return response;
    }
);

const resultsDataSlice = createSlice({
    name: 'resultsDataSlice',
    initialState: [] as ResultsInfoType[],
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
    },
    extraReducers: (builder: ActionReducerMapBuilder<ResultsInfoType[]>) => {
        builder.addCase(fetchAllResults.pending, (state) => {
            console.log('Loading results...', state);
        })
        .addCase(fetchAllResults.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
        .addCase(fetchAllResults.rejected, (_state, action) => {
            console.log(action.error);
        });
    }
});


export const ResultsDatareducer = resultsDataSlice.reducer;

export const {setAllResults, removeResult} = resultsDataSlice.actions;