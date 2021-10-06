import { aside } from '../components.js';


const menuHeaderItems = aside.querySelectorAll('.menu__header');
aside.addEventListener('click', function (e){
    if(e.target.closest('.menu__header')){
        e.target.closest('.menu__header').classList.toggle('menu__header--show');
    }
})
