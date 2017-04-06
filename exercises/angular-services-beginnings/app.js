var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "pokeService", function ($scope, pokeService) {
    $scope.showPokemon = pokeService.pokemon;
    $scope.pokeAdd = function (info) {
        $scope.showPokemon = pokeService.pokemonAdded(info);
    };
    $scope.deleteMe = function (index) {
        $scope.showPokemon.splice(index, 1)
    };
}])