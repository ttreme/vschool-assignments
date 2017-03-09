(function () {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    Date.prototype.getMonthName = function () {
        return hours[this.getHours()];
    };
    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };
})();
var now = new Date();
var day = "Today is : " + now.getDayName();
var hour = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var timeOfDay = "The Current Time is : " + hour + ":" + minutes + ":" + seconds;

function myFunction() {
    if (hour < 12) {
        console.log(timeOfDay + " AM");
    }
    else {
        console.log(timeOfDay + " PM");
    }
}