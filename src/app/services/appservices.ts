import { createContext, useContext } from "react";
import AnnouncementService from "./announcements-service";
import FinanceService from "./finance-service";
import CommonService from "./common-service";
import TeacherService from "./teacher-service";

interface IAppServices {
    announcementService: AnnouncementService;
    financeService: FinanceService;
    commonService: CommonService;
    teacherService: TeacherService;
}


export const appServices: IAppServices = {
    announcementService: new AnnouncementService(),
    financeService: new FinanceService(),
    commonService: new CommonService(),
    teacherService: new TeacherService(),
};


export const StoreContext = createContext<IAppServices>(appServices);

export const useAppStore =()=> useContext(StoreContext);