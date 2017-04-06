angular.module("myApp");

app.directive("mikeTheMink", function (){
    return{
        template: "<img ng-hide= 'myPoo' ng-mouseover='myPoo = true' src= mikeTheMink.jpg>"
    }
})