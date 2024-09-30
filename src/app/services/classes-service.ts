import { classesData } from "../data/lib/data";
import { ClassesInfoType } from "../models/dto/ClassesInfoType";

export default class ClassesService{

    getAllClasses = async (): Promise<ClassesInfoType[]> => {
        return new Promise((resolve)=>{
            return resolve(classesData);
        })
    }

}