import {Person, IPersonOption} from "./spirit";
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



function createStudent(option: any) {
    return new Student({
        name: option.name,
        identityId: option.identityId,
        age: option.age,
        sex: option.sex,
        character: option.character,
        mood: option.mood,
        balance: option.balance,
    }, {
        coach: option.coach,
    });
}
export {
    Student,
    createStudent,
}