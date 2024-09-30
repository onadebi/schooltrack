import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AssignmentsInfoType } from "../../../models/dto/AssignmentsInfoType";
import { appServices } from "../../../services/appservices";


export const initialState: AssignmentsInfoType[] = await appServices.assignmentsService.getAllAssignments();

export const AssignmentsDataSlice = createSlice({
    name: 'assignmentsDataSlice',
    initialState,
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
    }

});


export const {setAllAssignments, removeAssignment} = AssignmentsDataSlice.actions;