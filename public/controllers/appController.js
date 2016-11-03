var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
  $http.get('/clients').success(function(res){
    console.log('Data Received From Server');
    $scope.clients = res;
  });
}]);