var year = prompt("please input a year to find out the next 20 years");
var counter = 20;
function leapYearCalc(year, counter) {
    while (counter >= 0) {
        if ((year % 4 === 0) && (year % 100 !== 0)||(year % 400 === 0)) {
            console.log(year);
            year++;
            counter--;
        }
        else {
        year++;
        }   
    }
}

leapYearCalc(year, counter);
