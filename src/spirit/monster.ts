import {Person, IPersonOption} from "./spirit";
// 教练的类 

interface ICoachOption {
    studentList: Array<object>,
    
}

class Coach extends Person {
    protected studentList;

    constructor(personOption: IPersonOption, coachOption: ICoachOption ) {
        super(personOption);
        this.studentList = coachOption.studentList;

    }
}