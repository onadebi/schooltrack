export interface IPropsTableForm<T> {
    type: "create" | "update";
    data?: T;
    id?: number;
}