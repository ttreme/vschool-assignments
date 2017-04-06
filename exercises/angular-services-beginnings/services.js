angular.module("myApp");
app.service("pokeService", function () {
    this.pokemon = ["fadsf", "fdsaf"];
    var self = this;
    this.pokemonAdded = function (info) {
        self.pokemon.push(info);
        return self.pokemon;
    }
//    this.removePokemon = function(index){
//        $scope.showPokemon.splice()
//    }
})