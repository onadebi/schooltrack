import { studentsData } from "../data/lib/data";
import { StudentsInfoType } from "../models/dto/StudentInfoType";

export default class StudentService{

    getAllStudents = async (): Promise<StudentsInfoType[]> => {
        console.info('Students Data:', studentsData);
        return new Promise((resolve)=>{
            return resolve(studentsData);
        })
    }

}