angular.module("myApp");
app.service("myService", function () {
    this.myCartoons = [];
    this.addCartoon = function (info) {
        this.myCartoons.push(info);
    }
});