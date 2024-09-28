export type TeacherInfoType = {
    id: number,
    teacherId: string,
    name: string,
    email?: string,
    photo: string,
    phone: string,
    subjects: string[],
    classes: string[],
    address: string,
}

export const teachersInitData: TeacherInfoType[] = [];