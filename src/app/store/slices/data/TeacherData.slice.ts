import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeacherInfoType } from "../../../models/dto/TeacherInfoType";
import { appServices } from "../../../services/appservices";

const initState: TeacherInfoType[] = await appServices.teacherService.getAllTeachers();

export const TeacherDataSlice = createSlice({
    name: 'dataslice',
    initialState: initState,
    reducers: {
        setAllTeachers: (state, action: PayloadAction<TeacherInfoType[]>) => {
            state = action.payload;
            return state;
        },
        addTeacher: (state, action) => {
            state.push(action.payload);
        },
        updateTeacher: (state, action) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            state[index] = action.payload;
        },
        deleteTeacher: (state, action: PayloadAction<number>) => {
            state = state.filter((x) => x.id !== action.payload);
            return state;
        }
    }

});

export const {setAllTeachers, deleteTeacher} = TeacherDataSlice.actions;