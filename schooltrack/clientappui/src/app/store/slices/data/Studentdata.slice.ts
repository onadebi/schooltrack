import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appServices } from "../../../services/appservices";
import { StudentsInfoType } from "../../../models/dto/StudentInfoType";



export const fetchAllStudents = createAsyncThunk(
    'students/fetchAll',
    async () => {
        const response = await appServices.studentService.getAllStudents();
        return response;
    }
);

export const StudentSlice = createSlice({
    name: "studentslice",
    initialState: [] as StudentsInfoType[],
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllStudents.pending, (state) => {
            console.log('Loading students...', state);
        })
        .addCase(fetchAllStudents.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
        .addCase(fetchAllStudents.rejected, (_state, action) => {
            console.log(action.error);
        });
    }
});


export const {setAllStudents, deleteStudent } = StudentSlice.actions;