import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ParentInfoType } from "../../../models/dto/ParentInfoType";
import { appServices } from "../../../services/appservices";

export const fetchAllParents = createAsyncThunk(
    'parents/fetchAll',
    async () => {
        const response = await appServices.parentService.getAllParents();
        return response;
    }
)


export const ParentDataSlice = createSlice({
    name: 'parentdataslice',
    initialState: [] as ParentInfoType[],
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllParents.pending, (state) => {
            console.log('Loading parents...', state);
        })
        .addCase(fetchAllParents.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
        .addCase(fetchAllParents.rejected, (_state, action) => {
            console.log(action.error);
        });
    }
});


export const {setAllParents, removeParent} = ParentDataSlice.actions;