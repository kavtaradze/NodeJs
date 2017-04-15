angular.module("GugasApp", [])
    .controller("MainController", ["$http", "$scope",
        function($http, $scope){
            // what is scope; angularjs http module; ng-controller;
            $http.get("/example").then(function(res){
                console.log("data from server:", res.data);
                $scope.items = res.data.items;
            });
        }
    ]);
