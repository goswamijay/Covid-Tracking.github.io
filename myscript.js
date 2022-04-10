const URL = "https://covid19.mathdro.id/api";

let app = angular.module("myApp", []);

app.controller("myCtrl", ($scope, $http) => {
  //this is controller
  $scope.title = "Stay Home Stay Safe";

  //calling api
  $http.get(URL).then(
    (response) => {
      console.log(response.data);
      // console.log("Success");

      $scope.all_data = response.data;
    },
    (error) => {
      console.log(error);
    }
  );
  //get country data

  $scope.get_c_data = () => {
    let country = $scope.c;
    if (country == "") {
      $scope.c_data = undefined;
      return;
    }
    $http.get(`${URL}/countries/${country}`).then(
      (response) => {
        console.log(response.data);
        $scope.c_data = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
});
