import { teachersData } from "../data/lib/data";
import { TeacherInfoType } from "../models/dto/TeacherInfoType";

export default class TeacherService {

    getAllTeachers = async (): Promise<TeacherInfoType[]> => {
        return new Promise((resolve) => {
                return resolve(teachersData);
            }
        )
    }
}