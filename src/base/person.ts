interface IPersonOption {
    name: string,
    identityId: number, // 身份证
    age?: number,
    sex: number, // 0女 1男
    character: Array<string>, // 性格
    mood: string, // 心情, 影响练车效率和考场发挥
    balance: number, // 余额
}

class Person {
    protected name;
    protected identityId;
    protected age;
    protected sex;
    protected character;
    protected mood;
    protected balance;

    constructor(personOption: IPersonOption) {
        this.name = personOption.name;
        this.identityId = personOption.identityId;
        this.age = personOption.age;
        this.sex = personOption.sex;
        this.character = personOption.character;
        this.mood = personOption.mood;
        this.balance = personOption.balance;
    }
}

export {
    Person,
    IPersonOption,
} ;