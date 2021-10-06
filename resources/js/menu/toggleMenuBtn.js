import { aside } from '../components.js';


aside.addEventListener('click', function (e){
    if(e.target.closest('.menu-btn')){
        aside.classList.toggle('aside--hide');
    }
})
