// #region ResultsinfoType
export enum ResultsType {
    exam = "exam",
    assignment = "assignment",
}
export type ResultsInfoType = {
    id: number,
    subject: string,
    class: string,
    teacher: string,
    student: string,
    date: string,
    type : string, //ResultsType.exam | ResultsType.assignment,
    score: number,
}
//#endregion

//#region EventsInfoType
export type EventsInfoType = {
    id: number,
    title: string,
    class: string,
    date: string,
    startTime: string,
    endTime: string,
}
//#endregion


//#region AnnouncementsInfoType
export type AnnouncementsInfoType = {
    id: number,
    title: string,
    class: string,
    date: string,
}
//#endregion