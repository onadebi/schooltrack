export type TeacherInfoType = {
    id: number,
    teacherId: string,
    name: string,
    password: string;
    email?: string,
    photo: string,
    phone?: string,
    subjects: string[],
    classes: string[],
    address: string,
    username?: string,
}

export const teachersInitData: TeacherInfoType[] = [];