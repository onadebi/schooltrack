import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appServices } from "../../../services/appservices";
import { StudentsInfoType } from "../../../models/dto/StudentInfoType";

const initialState: StudentsInfoType[] = await appServices.studentService.getAllStudents();


export const StudentSlice = createSlice({
    name: "studentslice",
    initialState,
    reducers: {
        setAllStudents: (state, action) => {
            state = action.payload;
            return state;
        },
        addStudent: (state, action) => {
            state.push(action.payload);
        },
        updateStudent: (state, action) => {
            const index = state.findIndex((x) => x.id === action.payload.id);
            state[index] = action.payload;
        },
        deleteStudent: (state, action: PayloadAction<number>) => {
            state = state.filter((x) => x.id !== action.payload);
            return state;
        }
    }
});


export const {setAllStudents, deleteStudent } = StudentSlice.actions;