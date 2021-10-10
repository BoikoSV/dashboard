class Calendar {
    month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    constructor(date, input) {
        this.date = date;
        this.input = input;
        this.root = document.createElement('div');
        this.root.classList.add('calendar__dropdown');
    }
    createMonthList(){

        //     <li className="calendar__month-item">Jan</li>
        //     <li className="calendar__month-item">Feb</li>
        //     <li className="calendar__month-item">Mar</li>
        //     <li className="calendar__month-item">Apr</li>
        //     <li className="calendar__month-item">May</li>
        //     <li className="calendar__month-item calendar__month-item--active">Jun</li>
        //     <li className="calendar__month-item">Jul</li>
        //     <li className="calendar__month-item">Aug</li>
        //     <li className="calendar__month-item">Sep</li>
        //     <li className="calendar__month-item">Oct</li>
        //     <li className="calendar__month-item">Nov</li>
        //     <li className="calendar__month-item">Dec</li>


        return this.month.map((month, index) => {
            const li = document.createElement('li');
            li.innerText = month;
            li.classList.add('calendar__month-item');
            li.dataset.month = index;
            if(this.date.getMonth() === index){
                li.classList.add('calendar__month-item--active');
            }
            return li;
        });
    }

    createYear(){

        // <span className="calendar__year-count">2020</span>

        let yearCount = document.createElement('span');
        yearCount.classList.add('calendar__year-count');
        yearCount.innerText = this.date.getFullYear();
        return yearCount;



    }

    updateData(){
        let day = this.date.getDate() < 10 ? `0${this.date.getDate()}` : this.date.getDate();
        let month = this.date.getMonth() + 1 < 10 ? `0${this.date.getMonth() + 1}` : this.date.getMonth() + 1;
        let str = `${day}/${month}/${this.date.getFullYear()}`;

        this.input.value = str;
        this.render();
    }

    createDaysList(){
        // <li className="calendar__day-item"></li>
        // <li className="calendar__day-item"></li>
        // <li className="calendar__day-item"></li>
        // <li className="calendar__day-item">1</li>
        // <li className="calendar__day-item">2</li>
        // <li className="calendar__day-item">3</li>
        // <li className="calendar__day-item">4</li>
        // <li className="calendar__day-item calendar__day-item--active">5</li>
        // <li className="calendar__day-item">6</li>
        // <li className="calendar__day-item">7</li>
        // <li className="calendar__day-item">8</li>
        // <li className="calendar__day-item">9</li>
        // <li className="calendar__day-item">10</li>
        // <li className="calendar__day-item">11</li>
        // <li className="calendar__day-item">12</li>
        // <li className="calendar__day-item">13</li>
        // <li className="calendar__day-item">14</li>
        // <li className="calendar__day-item">15</li>
        // <li className="calendar__day-item">16</li>
        // <li className="calendar__day-item">17</li>
        // <li className="calendar__day-item">18</li>
        // <li className="calendar__day-item">19</li>
        // <li className="calendar__day-item">20</li>
        // <li className="calendar__day-item">21</li>
        // <li className="calendar__day-item">22</li>
        // <li className="calendar__day-item">23</li>
        // <li className="calendar__day-item">24</li>
        // <li className="calendar__day-item">25</li>
        // <li className="calendar__day-item">26</li>
        // <li className="calendar__day-item">27</li>
        // <li className="calendar__day-item">28</li>
        // <li className="calendar__day-item">29</li>
        // <li className="calendar__day-item">30</li>
        // <li className="calendar__day-item">31</li>
        // <li className="calendar__day-item"></li>

        let someDate = new Date(this.date);

        someDate.setDate(1);

        let start = false;
        let thisMonth = someDate.getMonth();
        const days = [];
        let maxDays = 34;


        for (let i = 0; i <= maxDays; i++){

            let li = document.createElement('li');
            li.classList.add('calendar__day-item');
            if(i === someDate.getDay()){
                start = true;
            }
            if(start && (thisMonth === someDate.getMonth())){
                li.innerText = someDate.getDate();

                if((this.date.getTime() === someDate.getTime()) && start){
                    li.classList.add('calendar__day-item--active');
                }

                someDate.setDate(someDate.getDate() + 1);
            }
            if(i === maxDays && someDate.getMonth() === thisMonth){
                maxDays = maxDays + 7;
            }


            days.push(li);
        }
        return days;
    }

    createWeeksList(){
        const week = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];


        return week.map(day => {
            let dayHtml = document.createElement('li');
            dayHtml.classList.add('calendar__weeks-item');
            dayHtml.innerText = day;
            return dayHtml;
        })

    }

    incrementYear(){
        this.date.setFullYear(this.date.getFullYear() + 1);
        // this.render();
        this.updateData();
    }
    decrementYear(){
        this.date.setFullYear(this.date.getFullYear() - 1);
        // this.render();
        this.updateData()
    }
    selectMonth(month){
        this.date.setMonth(+month);
        // this.render();
        this.updateData()
    }
    selectDay(date){

        this.date.setDate(+date);
        // this.render();
        this.updateData()
    }
    render(){

        const root = this.root;
        root.innerHTML = '';

        const calendarMonth = document.createElement('ul');
        calendarMonth.addEventListener('click', (e) => {
            if(e.target.closest('.calendar__month-item')){
                this.selectMonth(e.target.closest('.calendar__month-item').dataset.month);
            }
        })
        calendarMonth.classList.add('calendar__month');
        calendarMonth.append(...this.createMonthList());
        root.append(calendarMonth);


        // <div className="calendar__year">
        //     <button type="button" className="calendar__year-left"></button>
        //     <span className="calendar__year-count">2020</span>
        //     <button type="button" className="calendar__year-right"></button>
        // </div>

        const calendarYear = document.createElement('div');
        calendarYear.classList.add('calendar__year');

        const buttonLeft = document.createElement('button');
        buttonLeft.addEventListener('click', () => {
            this.decrementYear();
        })
        buttonLeft.type = 'button';
        buttonLeft.classList.add('calendar__year-left');
        calendarYear.append(buttonLeft);

        calendarYear.append(this.createYear());

        const buttonRight = document.createElement('button');
        buttonRight.addEventListener('click', () => {
            this.incrementYear();
        })
        buttonRight.type = 'button';
        buttonRight.classList.add('calendar__year-right');
        calendarYear.append(buttonRight);

        root.append(calendarYear);



        const weekWrap = document.createElement('ul');
        weekWrap.classList.add('calendar__weeks-list');
        weekWrap.append(...this.createWeeksList());

        root.append(weekWrap);




        const calendarDaysList = document.createElement('ul');
        calendarDaysList.classList.add('calendar__day-list');
        calendarDaysList.addEventListener('click', (e) => {
            if(e.target.closest('.calendar__day-item')){
                this.selectDay(e.target.closest('.calendar__day-item').innerText);
            }
        })
        calendarDaysList.append(...this.createDaysList());


        const okButton = document.createElement('button');
        okButton.addEventListener('click', (e) =>{
            e.target.closest('.calendar__dropdown').remove();
        })
        okButton.type = 'button';
        okButton.innerText = 'OK';
        okButton.classList.add('calendar__button-add');
        root.append(okButton);

        root.append(calendarDaysList);

        return root;
    }
}


const wrapper = document.querySelector('.calendar');
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


