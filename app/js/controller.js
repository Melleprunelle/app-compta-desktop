app.controller('usersCtrl', function ($scope, $http, $rootScope) {
    $http({
        method: 'GET',
        url: 'js/users.json'
    }).then(function (response) {
        $scope.usersData = response.data.records;
        $rootScope.aUsers = [];
        $rootScope.bUsers = [];
        //Generating array aUsers with structure [id => username]
        for ($user in $scope.usersData) {
            $rootScope.bUsers[$scope.usersData[$user].Id] = $scope.usersData[$user];
            $rootScope.aUsers[$scope.usersData[$user].Id] = $scope.usersData[$user].username;
        }

        function errorCallback(response) {
            console.log("Failure");
            console.error(response);
        }
    });
});

app.controller("userFormController", function ($scope) {
    $scope.addUser = function (user) {
        $scope.usersData.push(user);
        $scope.user = {};
        
        $scope.selection = [];
        $scope.Selection = function Selection(usersUsersname) {
            $scope.selection.push(usersUsersname);
        }
    };
});


app.controller('usersDepenses', function ($scope, $http, $rootScope) {
    $http({
        method: 'GET',
        url: 'js/depenses.json'
    }).then(function (response) {
            $scope.depensesData = response.data.records;
            console.log($rootScope.aUsers);
            
    //Variable qui permet de créer le premier tableau à explorer.
    $scope.aConcernes = [];
    //Tableau qui stock les nom un par un et qui est ensuite join
    $scope.aConcernesElement = [];
    //Tableau avec la liste des noms mais le mauvais index
    $scope.aConcernesTrue = [];
    //Le bon tableau à utiliser
    $scope.aConcernesFinal = [];

    for ($depense in $scope.depensesData) {
        //On crée le tableau à explorer (le split est important car il permet de rendre ce tableau exploitable pour la boucle suivante)
        $scope.aConcernes[$depense] = $scope.depensesData[$depense].Concernes.split(',');
    }

    //le $scope.aConcernes est un tableau qui contient des tableaux (2 niveaux, donc 2 boucles for)
    for ($i = 0; $i < $scope.aConcernes.length; $i++) {
        for ($x = 0; $x < $scope.aConcernes[$i].length; $x++) {
            //On transforme les ID en nom.
            $scope.aConcernesElement.push($rootScope.aUsers[$scope.aConcernes[$i][$x]]);
        }
        //On join les nom pour obtenir une ligne qu'on assigne dans un tableau unique
        $scope.aConcernesElement = $scope.aConcernesElement.join(", ");
        $scope.aConcernesTrue.push($scope.aConcernesElement);
        //On réinitialise la ligne pour faire une nouvelle
        $scope.aConcernesElement = [];
    }

    //Cette boucle est pour créer un tableau qui a pour clés les ID des dépenses et pour valeur les lignes créer plus tôt.
    for ($depense in $scope.depensesData) {
        $scope.aConcernesFinal[$scope.depensesData[$depense].Id] = $scope.aConcernesTrue[$depense];
    }
        },
        function errorCallback(response) {
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