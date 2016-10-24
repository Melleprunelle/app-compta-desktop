app.controller('usersCtrl', function($scope, $http) {
  $http({
      method:'GET',
      url : 'js/users.json'
  }).then(function (response) {
      $scope.usersData = response.data.records;
        $scope.aUsers = [];
        //Generating array aUsers with structure [id => username]
        for($user in $scope.usersData){
            $scope.aUsers[$scope.usersData[$user].Id] = $scope.usersData[$user];
        }
  }, 
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


app.controller('usersDepenses', function($scope, $http) {
  $http({
      method:'GET',
      url : 'js/depenses.json'
  }).then(function (response) {
      $scope.depensesData = response.data.records;
      console.log($scope.aUsers);
      
  } , 
         function errorCallback(response){
      console.log("Failure");
      console.error(response);
  });
});

app.controller("userFormController2", function ($scope) {
    $scope.addDepense = function (depense) {
        $scope.depensesData.push(depense);
        $scope.depense = {};
    };

});