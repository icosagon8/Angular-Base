import { CourseModel } from '../models/course.model';

export const COURSES: CourseModel[] = [
    {
        id: 1,
        title: 'Java',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        creationDate: new Date('2018-02-01'),
        duration: 480,
        authors: ['Dave Simmonds', 'Nikolas Le-Mark'],
    },
    {
        id: 2,
        title: 'ASP .NET',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        creationDate: new Date('2020-12-11'),
        duration: 1475,
        authors: ['Anna Sidorenko', 'Valentina Larina'],
    },
    {
        id: 3,
        title: 'JavaScript',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        creationDate: new Date('2019-05-20'),
        duration: 600,
        authors: ['Vasiliy Dobkin', 'Nikolas Kim'],
    },
    {
        id: 4,
        title: 'Angular',
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        creationDate: new Date('2012-03-20'),
        duration: 150,
        authors: ['Dave Haisenberg', 'Tony Ja'],
    },
];
