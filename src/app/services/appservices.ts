import { createContext, useContext } from "react";
import AnnouncementService from "./announcements-service";
import FinanceService from "./finance-service";
import CommonService from "./common-service";
import TeacherService from "./teacher-service";
import StudentService from "./student-service";
import ParentService from "./parent-service";
import SubjectsService from "./subjetcts-service";
import ClassesService from "./classes-service";
import LessonsService from "./lessons-service";
import ExamService from "./exam-service";
import AssignmentsService from "./assignments-service";
import ResultsService from "./results-service";
import EventsService from "./events-service";

interface IAppServices {
    announcementService: AnnouncementService;
    financeService: FinanceService;
    commonService: CommonService;
    teacherService: TeacherService;
    studentService: StudentService;
    parentService: ParentService;
    subjectsService: SubjectsService;
    classesService: ClassesService;
    lessonsService: LessonsService;
    examService: ExamService;
    assignmentsService: AssignmentsService;
    resultsService: ResultsService;
    eventsService: EventsService;
}


export const appServices: IAppServices = {
    announcementService: new AnnouncementService(),
    financeService: new FinanceService(),
    commonService: new CommonService(),
    teacherService: new TeacherService(),
    studentService: new StudentService(),
    parentService: new ParentService(),
    subjectsService: new SubjectsService(),
    classesService: new ClassesService(),
    lessonsService: new LessonsService(),
    examService: new ExamService(),
    assignmentsService: new AssignmentsService(),
    resultsService: new ResultsService(),
    eventsService: new EventsService(),
};


export const StoreContext = createContext<IAppServices>(appServices);

export const useAppStore =()=> useContext(StoreContext);