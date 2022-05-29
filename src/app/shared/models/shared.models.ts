export interface Response<T> {
    successful: boolean;
    result: T;
}

export interface Author {
    name: string;
    id: string;
}

export interface Course {
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
    id: string;
}
