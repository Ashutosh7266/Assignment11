
  var app = angular.module('movieJSN', []);

  app.controller('movieController', function($scope, $http) {

    $http.get('http://localhost:8080/get/movie/data')
      .then(function(response) {
        $scope.test="testdata";
        $scope.movie = response.data;
      });

  });
})();
