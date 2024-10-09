import { resultsData } from "../data/lib/data";
import { ResultsInfoType } from "../models/dto";

export default class ResultsService{

    getAllResults = async (): Promise<ResultsInfoType[]> => {
        return new Promise((resolve)=>{
            return resolve(resultsData);
        })
    }

}