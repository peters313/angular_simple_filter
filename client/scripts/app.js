var myApp = angular.module('myApp', ['ngAnimate']);

myApp.controller("WelcomeController", ['$scope', '$http', function($scope, $http){
    $scope.note = {};

    $scope.heading = "Here is your message: ";
    $scope.names = [];
    $scope.getData = function(){
        //Get
        $http.get('/data').then(function(data){
            $scope.names = data.data;
            console.log("here is scope.names: ", $scope.names);
            console.log(data);
        });
    };
    $scope.customFilter = function(name) {
        name.message = name.message.replace(/[0-9!@#$^&'%*()+-\/{}:<>?,.]/g, '');
        return name
    };
    $scope.updateMessage = function(note){
        //POST
        console.log(note);
        $http.post('/data', note).then($scope.getData());
        //$scope.message = "Hello " + $scope.name + "!";
    };
}]);