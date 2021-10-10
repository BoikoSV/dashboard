class Calendar {
    month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    constructor(date) {
        this.date = date;
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
            if(this.date.getMonth() === index){
                li.classList.add('calendar__month-item--active');
            }
            return li;
        });
    }

    createYear(){

        // <span className="calendar__year-count">2020</span>

        const yearCount = document.createElement('span');
        yearCount.classList.add('calendar__year-count');
        yearCount.innerText = this.date.getFullYear();
        return yearCount;
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

    render(){
        const root = document.createElement('div');
        root.classList.add('calendar__dropdown');


        const calendarMonth = document.createElement('ul');
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
        buttonLeft.classList.add('calendar__year-left');
        calendarYear.append(buttonLeft);

        calendarYear.append(this.createYear());

        const buttonRight = document.createElement('button');
        buttonRight.classList.add('calendar__year-right');
        calendarYear.append(buttonRight);

        root.append(calendarYear);



        const weekWrap = document.createElement('ul');
        weekWrap.classList.add('calendar__weeks-list');
        weekWrap.append(...this.createWeeksList());

        root.append(weekWrap);




        const calendarDaysList = document.createElement('ul');
        calendarDaysList.classList.add('calendar__day-list');
        calendarDaysList.append(...this.createDaysList());

        root.append(calendarDaysList);

        return root;
    }
}

const calendar = new Calendar(new Date());
document.querySelector('.calendar').append(calendar.render());

// console.log(calendar.render())
