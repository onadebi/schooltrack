import { lessonsData } from "../data/lib/data";
import { LessonsInfoType } from "../models/dto/LessonsInfoType";

export default class LessonsService {

    getAllLessons = async (): Promise<LessonsInfoType[]> => {
        return new Promise((resolve) => {
            return resolve(lessonsData);
        })
    }

}