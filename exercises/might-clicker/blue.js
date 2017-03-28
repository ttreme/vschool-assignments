angular.module("myApp");
app.service("blueService", function () {
    this.clickAmount = 100;
    this.increment = function () {
        this.clickAmount++;
        if (this.clickAmount === 200) {
            this.clickAmount = 100
        }
    }
    this.decrement = function () {
        this.clickAmount--;
        if (this.clickAmount === 0) {
            this.clickAmount = 100;
        }
    }
})