


var sampleApp = angular.module('myapp', []);
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'homecontroller'
    }).
      when('/Electioncandidates', {
        templateUrl: 'pages/Electioncandidates.html',
        controller: 'ecandidatescontroller'
    }).


      when('/Electionresult', {
        templateUrl: 'pages/Electionresult.html',
        controller: 'eresultcontroller'
      }).
       when('/Login', {
        templateUrl: 'pages/Login.html',
        controller: 'logincontroller'
      }).

      when('/Contact', {
        templateUrl: 'pages/contactus.html',
        controller: 'contactcontroller'
      }).
 
           when('/Online', {
        templateUrl: 'pages/onlinevoting.html',
        controller: 'onlinecontroller'
      }).



      when('/jeyalalitha', {
        templateUrl: 'partypages/admk.html',
        controller: 'admkcontroller'
      }).

      when('/karunanithi', {
        templateUrl: 'partypages/dmk.html',
        controller: 'dmkcontroller'
      }).

        when('/vijayakanth', {
        templateUrl: 'partypages/dmdk.html',
        controller: 'dmdkcontroller'
      }).
         when('/anbumani', {
        templateUrl: 'partypages/pmk.html',
        controller: 'dmdkcontroller'
      }).
          when('/vaiko', {
        templateUrl: 'partypages/mdmk.html',
        controller: 'mdmkcontroller'
      }).





      otherwise({
        redirectTo: '/home'
      });
}]);
 
 
sampleApp.controller('homecontroller', function($scope) {
     
    $scope.message = 'This is HOME pages';
     
});


 
 
sampleApp.controller('ecandidatescontroller', function($scope)

 {

    $scope.message = 'This is Election candidate  pages';


 
});






sampleApp.controller('eresultcontroller', function($scope) {
 
    $scope.message = 'This is Election result pages';
 
});


sampleApp.controller('logincontroller', function($scope) {
 
    $scope.message = 'This is login pages';
 
});


sampleApp.controller('contactcontroller', function($scope) {
 
    $scope.message = 'This is contact controller pages';
 
});


sampleApp.controller('onlinecontroller', function($scope) {
 
    $scope.message = 'This is online controller pages';
 
});















