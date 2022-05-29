export interface Response<T> {
    successful: boolean;
    result: T;
}

export interface Author {
    name: string;
    id: string;
}
