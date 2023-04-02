const getCalendarArr = () => {
    let columnArrs = [
        ['<b>M</b>'],
        ['<b>T</b>'],
        ['<b>W</b>'],
        ['<b>T</b>'],
        ['<b>F</b>'],
        ['<b>S</b>'],
        ['<b>S</b>']
    ]

    // First, populate the columnArrays according to date of the first day of the month.
    let year = new Date().getFullYear();
    let month = new Date().getMonth();

    let firstOfMonth = new Date(year, month, 1);

    // Because Monday is coded as 1, and our offset starts on 1, we subtract 1 then mod 7.
    // This would result in negative mod values, so instead we add 6.
    let offset = (firstOfMonth.getDay() + 6) % 7;

    // console.log(offset);

    // use 0 as the day to get the last day of the month
    let endOfMonth = new Date(year, month + 1, 0)
    let numberOfDaysInCurrentMonth = endOfMonth.getDate();
    // generate an array i.e. [1, 2, ..., 30]
    let arr = [...Array(numberOfDaysInCurrentMonth).keys()]

    // first, push spaces.
    for (let i = 0; i < offset; i++) {
        columnArrs[i].push("&nbsp;")
    }

    arr.forEach((number, index) => {
        // Start counting from index + offset
        index = (index + offset) % 7;
        columnArrs[index].push(number + 1)
        index++;
    })

    console.log(columnArrs)
    return columnArrs;
}

const populateCalendar = (columnArrs) => {
    let calendarDiv = document.querySelector('#calendar').querySelector('.row');

    for (let columnArr of columnArrs) {
        let columnDiv = document.createElement('div')
        columnDiv.className = "column";
        for (let number of columnArr) {
            let numberDiv = document.createElement('div')
            numberDiv.innerHTML = number
            columnDiv.append(numberDiv);
        }
        calendarDiv.append(columnDiv);
    }
}

// Add an event listener to each number & put the columns width 1/7
function formatCalendar() {
    for (let i = 0; i < elements.length; i++) {
        // Put the columns of width 1/7
        elements[i].style.msFlex = "14%";  // IE10
        elements[i].style.flex = "14%";

        // for each number day, we add an event listener  
        let numbers = elements[i].querySelectorAll('div');

        numbers.forEach(number => {
            // make today's date blue
            if (number.innerHTML == new Date().getDate()) {
                number.style.color = "#007FFF"
            };


            if (/\d/.test(number.innerHTML)) {
                number.className = "calendar-day"
                number.addEventListener('click', () => {

                    selectedDay = number.innerHTML
                    events.innerHTML = ""
                    showEvents(selectedDay);
                });
            }
            // when you click on a number, display events in events div

        })
    }
}

const colorNumber = (id) => {
    for (let i = 0; i < elements.length; i++) {
        let numbers = elements[i].querySelectorAll('div');
        numbers.forEach(el => {
            if (el.innerHTML === id && /\d/.test(el.innerHTML)) {
                el.style.color = 'aqua';
            } else if (el.innerHTML == new Date().getDate()) {
                el.style.color = "#007FFF"
            } else {
                el.style.color = '';
            }
        });
    }
}
