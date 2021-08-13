// import { createStudent } from './base/student';
import Game from '@/game/game';
import Editor from './editor/editor';
import './index.css'

// 一个格子占多数像素
const DENSITY = 20;

const game = new Game({
    layout: document.getElementById('root') as HTMLElement,
    DENSITY,
});
game.init();

const editor = new Editor({
    layout: document.getElementById('editor') as HTMLElement,
    game,
});

// const student = createStudent({
//     name: '小杨',
//     identityId: 140624199704290030,
//     age: 24,
//     sex: 1,
//     character: ['阴险小人'],
//     mood: '高昂',
//     balance: 1000000,
//     coach: {},
// })

// console.log(student)