export type StudentsInfoType={
    id: number,
    studentId: string,
    name: string,
    email?: string,
    photo? :string,
    phone?: string,
    grade: number,
    class: string,
    address: string,
}

export const studentsInitData: StudentsInfoType[] = [];