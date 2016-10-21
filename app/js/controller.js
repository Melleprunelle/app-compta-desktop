app.controller('usersCtrl', function($scope, $http) {
  $http({
      method:'GET',
      url : 'js/users.json'
  }).then(function (response) {
      $scope.usersData = response.data.records;
      
  } , 
         function errorCallback(response){
      console.log("Failure");
      console.error(response);
  });
});

app.controller("userFormController", function ($scope) {
    $scope.addUser = function (user) {
        $scope.usersData.push(user);
        $scope.user = {};
    };

});