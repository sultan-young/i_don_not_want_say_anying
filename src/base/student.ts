import {Person, IPersonOption} from "./person";
// 教练的类

interface IStudentOption {
    coach: Object,
}

class Student extends Person {
    protected coach;

    constructor(personOption: IPersonOption, studentOption: IStudentOption ) {
        super(personOption);
        this.coach = studentOption.coach;

    }
}

export {
    Student,
}