/*eslint-disable*/
const btn1 = document.querySelector('.btn1');
const coolButton = document.querySelector('.btn2');

function handleClick() {
    console.log('It Got Clicked!!!');
}
btn1.addEventListener('click',handleClick);

const hooray = () => console.log('HOORAY!');
coolButton.addEventListener('click',hooray);