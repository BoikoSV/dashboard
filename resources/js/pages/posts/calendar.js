import Calendar from '../../calendar';

console.log(Calendar);

document.querySelectorAll('.calendar').forEach(wrapper => {

    // const wrapper = document.querySelector('.calendar');
    const input = wrapper.querySelector('.calendar__input');
    const button = wrapper.querySelector('.calendar__input-btn');
    button.addEventListener('click', function (){
        if(wrapper.querySelector('.calendar__dropdown')){
            wrapper.querySelector('.calendar__dropdown').remove();
        }
        try{
            let date;
            if(input.value === null || input.value === ''){
                date = new Date();
            }else{
                const dateStr = input.value.match(/^(\d{2})[\./-](\d{2})[\./-](\d{4})/);
                if(dateStr.length === 4){
                    const dateArr = dateStr.slice(1);
                    const dateArrReverse = dateArr.reverse();
                    date = new Date(...dateArrReverse);
                }
            }

            const calendar = new Calendar(date, input);

            wrapper.append(calendar.render());
        }catch (e){
            alert('Не поддерживаемый формат даты, попробуйте выбрать другую')
            input.value = '';
        }

    })



})
