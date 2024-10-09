import { combineReducers } from "@reduxjs/toolkit";
import { CommonSlice } from "./slices/common/Common.slice";
import { TeacherDataSlice } from "./slices/data/TeacherData.slice"; // Adjust the path as necessary
import { StudentSlice } from "./slices/data/Studentdata.slice";
import { ParentDataSlice } from "./slices/data/ParentData.slice";
import { SubjectDataSlice } from "./slices/data/SubjectData.slice";
import { ClassesDataSlice } from "./slices/data/ClassesData.slice";
import { LessonsDataSlice } from "./slices/data/LessonsData.slice";
import { ExamDataSlice } from "./slices/data/ExamsData.slice";
import { AssignmentsDataSlice } from "./slices/data/AssignmentsData.slice";
import { ResultsDatareducer } from "./slices/data/resultsDataSlice";
import { EventsDataReducer } from "./slices/data/eventsDataSlice";
import { AnnouncementDataReducer } from "./slices/data/AnnouncementData.slice";

export const RootReducer = combineReducers({
    common: CommonSlice.reducer,
    teachers: TeacherDataSlice.reducer,
    students: StudentSlice.reducer,
    parents: ParentDataSlice.reducer,
    subjects: SubjectDataSlice.reducer,
    classes: ClassesDataSlice.reducer,
    lessons: LessonsDataSlice.reducer,
    exams: ExamDataSlice.reducer,
    assignments: AssignmentsDataSlice.reducer,
    results: ResultsDatareducer,
    events: EventsDataReducer,
    announcements: AnnouncementDataReducer,
});
