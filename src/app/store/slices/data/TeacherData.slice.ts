import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeacherInfoType, teachersInitData } from "../../../models/dto/TeacherInfoType";
import { appServices } from "../../../services/appservices";


export const TeacherDataSlice = createSlice({
    name: 'dataslice',
    initialState: await appServices.teacherService.getAllTeachers(),
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