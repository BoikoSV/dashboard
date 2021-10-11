import Calendar from '../../calendar';


document.querySelectorAll('.calendar').forEach(wrapper => {


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
        document.addEventListener('click', function (e){
            // console.log(e.target.parentElement)
            if(!(
                e.target.closest('.calendar__dropdown') ||
                e.target.closest('.calendar__month') ||
                e.target.closest('.calendar__year') ||
                e.target.closest('.calendar__day-list')

            )){
                if(
                    wrapper.querySelector('.calendar__dropdown') &&
                    e.target !== button &&
                    e.target.closest('.calendar__input-btn') !== button){
                    wrapper.querySelector('.calendar__dropdown').remove();
                }
            }
        })

    })






})
