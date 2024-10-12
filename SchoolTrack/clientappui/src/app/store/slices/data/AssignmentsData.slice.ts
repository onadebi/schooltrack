import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AssignmentsInfoType } from "../../../models/dto/AssignmentsInfoType";
import { appServices } from "../../../services/appservices";


export const fetchAllAssignments = createAsyncThunk(
    'assignments/fetchAll',
    async () => {
        const response = await appServices.assignmentsService.getAllAssignments();
        return response;
    }
);

export const AssignmentsDataSlice = createSlice({
    name: 'assignmentsDataSlice',
    initialState: [] as AssignmentsInfoType[],
    reducers:{
        setAllAssignments: (state, action: PayloadAction<AssignmentsInfoType[]>) => {
            state = action.payload;
            return state;
        },
        addAssignment: (state, action) => {
            state.push(action.payload);
        },
        updateAssignment: (state, action) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            state[index] = action.payload;
        },
        removeAssignment: (state, action: PayloadAction<number>) => {
            state = state.filter((x) => x.id !== action.payload);
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllAssignments.pending, (state) => {
            console.log('Loading assignments...', state);
        })
        .addCase(fetchAllAssignments.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
        .addCase(fetchAllAssignments.rejected, (_state, action) => {
            console.log(action.error);
        });
    }
});


export const {setAllAssignments, removeAssignment} = AssignmentsDataSlice.actions;