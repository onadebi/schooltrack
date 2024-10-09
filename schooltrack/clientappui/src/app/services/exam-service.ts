import { examsData } from "../data/lib/data";
import { ExamInfoType } from "../models/dto/ExamInfoType";

export default class ExamService{

    getAllExams = async (): Promise<ExamInfoType[]> => {
        return new Promise((resolve)=>{
            return resolve(examsData);
        })
    }

    removeExam = async (id: number): Promise<ExamInfoType[]> => {
        return new Promise((resolve)=>{
            return resolve(examsData.filter((x) => x.id !== id));
        })
    }

};