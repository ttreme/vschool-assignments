angular.module("myApp");
app.service("blueService", function ($http) {

    this.getStuff = function () {
        var weGotThis;
        return $http.get("/upvotes").then(function (response) {
            weGotThis = response.data;
            return weGotThis;
        })
    }

    this.changeVote = function (votes) {
        return $http.post("/upvotes", votes).then(function (response) {
            return response.data;
        })
    }

    this.editVote = (function(votes) {
        console.log(votes._id);
        return $http.put("/upvotes/" + votes._id, votes).then(function (response){
            console.log(response);
            return response.data;
        })
    })
    this.deleteVote = (function(votes){
        console.log(votes._id);
        return $http.delete("/upvotes/" + votes._id, votes).then(function(response){
            return response.data;
        })
    })

})


//http.post('http://website.com/array', newObject)
//http.get()
//
//service File
//this.getFunction = function(){
//    return http.get('')
//}
