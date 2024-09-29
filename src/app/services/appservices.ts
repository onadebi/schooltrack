import { createContext, useContext } from "react";
import AnnouncementService from "./announcements-service";
import FinanceService from "./finance-service";
import CommonService from "./common-service";
import TeacherService from "./teacher-service";
import StudentService from "./student-service";
import ParentService from "./parent-service";
import SubjectsService from "./subjetcts-service";

interface IAppServices {
    announcementService: AnnouncementService;
    financeService: FinanceService;
    commonService: CommonService;
    teacherService: TeacherService;
    studentService: StudentService;
    parentService: ParentService;
    subjectsService: SubjectsService;
}


export const appServices: IAppServices = {
    announcementService: new AnnouncementService(),
    financeService: new FinanceService(),
    commonService: new CommonService(),
    teacherService: new TeacherService(),
    studentService: new StudentService(),
    parentService: new ParentService(),
    subjectsService: new SubjectsService(),
};


export const StoreContext = createContext<IAppServices>(appServices);

export const useAppStore =()=> useContext(StoreContext);