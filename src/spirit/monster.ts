import { Spirit, ISpiritOption} from "./spirit";
// 教练的类 

interface ICoachOption {
    studentList: Array<object>,
    
}

class Coach extends Spirit {
    protected studentList;

    constructor(personOption: ISpiritOption, coachOption: ICoachOption ) {
        super(personOption);
        this.studentList = coachOption.studentList;

    }
}