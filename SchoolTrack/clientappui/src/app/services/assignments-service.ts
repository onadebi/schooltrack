import { assignmentsData } from "../data/lib/data";
import { AssignmentsInfoType } from "../models/dto/AssignmentsInfoType";

export default class AssignmentsService{

    getAllAssignments = async (): Promise<AssignmentsInfoType[]> => {
        return new Promise((resolve)=>{
            return resolve(assignmentsData);
        })
    }
    removeAssignment = async (id: number): Promise<AssignmentsInfoType[]> => {
        return new Promise((resolve)=>{
            return resolve(assignmentsData.filter((x) => x.id !== id));
        })
    }

};