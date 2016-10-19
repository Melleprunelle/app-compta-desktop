// résumé des créances
/*app.controller("resumController", function ($scope) {
    $scope.resums = [
        {
         "id":"273",
         "montant":"23€",         
         "payeur":"Exemple payeur",
         "concernes":"Exemple user1, user2, user3",
         "date":"",
         "nbConcernes":"3",
         "usergroup":"Exemple Group",
         "description":"Exemple description / Users 1 : 2.50 euros pour des feuilles de tabac. Users 2 : 7.50 euros pour un paquet de blonde. Users3 : 10 euros pour tabac + feuille."
        }

  ]
});

app.controller("resumFormController", function ($scope) {
    $scope.addUser = function (user) {
        $scope.resums.push(user);
        $scope.resum = {};
    };

});*/



//controller d'ajout de débiteurs
/*
app.controller("userController", function ($scope) {
    $scope.users = [
        {
        }
      ]
});*/



/*
app.controller('userFormController', function($scope, $http) {
  $http.get("users.json").then(function (response) {
      $scope.myData = response.data.records;
  });
});

app.controller("userFormController", function ($scope) {
    $scope.addUser = function (user) {
        $scope.users.push(user);
        $scope.user = {};
    };

});*/



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

/*app.controller("userSup", function ($scope) {
    $scope.supUser = function (sup) {
        var sup = angular.element('{{users.Id}}');
        $scope.usersData.splice(sup);
        $scope.usersData = {};
    };

});*/
