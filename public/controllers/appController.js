var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
  $http.get('/clients').success(function(res){
    console.log('Data Received From Server');
    $scope.clients = res;
  });

  $scope.addClient = function(){
    console.log('Adding new client...');
    $http.post('/clients', $scope.client).success(function(res){
      console.log('Client Added');
      window.location.href='/'
    });
  }
  $scope.editClient = function(id){
    $('#addBtn').remove();
    $http.get('/clients/' + id).success(function(res){
      $scope.client = res;
      
    });
  }

  $scope.updateClient = function(){
    $http.put('/clients/' + $scope.client._id, $scope.client).success(function(res){
      console.log('Client updated...')
      window.location.href = '/';
    });
  }
}]);