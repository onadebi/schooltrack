import { parentsData } from "../data/lib/data";
import { ParentInfoType } from "../models/dto/ParentInfoType";

export default class ParentService {

    getAllParents = async (): Promise<ParentInfoType[]> => {
        console.info('Parents Data:', parentsData);
        return new Promise((resolve)=>{
            return resolve(parentsData);
        })
    }

}