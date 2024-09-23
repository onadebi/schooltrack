import { createContext, useContext } from "react";
import AnnouncementService from "./announcements-service";
import FinanceService from "./finance-service";
import CommonService from "./common-service";

interface IAppServices {
    announcementService: AnnouncementService;
    financeService: FinanceService;
    commonService: CommonService;
}


export const appServices: IAppServices = {
    announcementService: new AnnouncementService(),
    financeService: new FinanceService(),
    commonService: new CommonService(),
};


export const StoreContext = createContext<IAppServices>(appServices);

export const useAppStore =()=> useContext(StoreContext);