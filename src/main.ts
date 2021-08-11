import { createStudent } from './base/student';
import Game from '@/game/index';
import './index.css'

const game = new Game({
    el: document.getElementById('root') as HTMLElement,
});
console.log(game, 1)
game.init();

const student = createStudent({
    name: '小杨',
    identityId: 140624199704290030,
    age: 24,
    sex: 1,
    character: ['阴险小人'],
    mood: '高昂',
    balance: 1000000,
    coach: {},
})

console.log(student)