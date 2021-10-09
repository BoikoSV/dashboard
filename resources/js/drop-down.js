document.querySelectorAll('.drop-down').forEach(function (dropDown){
    // const dropDown = document.querySelector('.drop-down');
    const selectBox = dropDown.querySelector('.drop-down__select');
    const button = dropDown.querySelector('.drop-down__button');
    const list = dropDown.querySelector('.drop-down__list');
    const input = dropDown.querySelector('.drop-down__input');


    button.addEventListener('click', function (){
        selectBox.classList.toggle('drop-down__select--open');
    })

    list.addEventListener('click', function (e){
        if(e.target.closest('.drop-down__list-item')){
            button.innerText = e.target.closest('.drop-down__list-item').innerText;
            input.value = e.target.closest('.drop-down__list-item').dataset.value;
            selectBox.classList.remove('drop-down__select--open');
        }
    })

    document.addEventListener('click', function (e){
        if(e.target.closest('.drop-down') !== dropDown){
            selectBox.classList.remove('drop-down__select--open');
        }
    })

});
