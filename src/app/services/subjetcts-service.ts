import { subjectsData } from "../data/lib/data";
import { SubjectInfoType } from "../models/dto/SubjectInfoType";

export default class SubjectsService {

    getAllSubjects = async (): Promise<SubjectInfoType[]> => {
        return new Promise((resolve) => {
            return resolve(subjectsData);
        });
    }
}