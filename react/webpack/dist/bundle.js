/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// import { format } from 'date-fns';
// import { add } from './math';
// import './index.css';

// const container = document.querySelector('.container');
// container.innerText = format(new Date(), 'dd/MM/yyyy');

for (let i = 0; i < 10; i++) {
  console.log(`Index ${i}`);
}
const arr = [1, Math.round(Math.random() * 100), 2, 4, 5, 3];
const arr2 = [...arr, 1, 2, ...arr, 3, 1, ...arr];
console.log(arr2);
/******/ })()
;