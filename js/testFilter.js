/**
 * Created by allen on 15/9/23.
 */


var app = angular.module('myApp',[]);

app.controller('myFilter',function($scope){
   $scope.persons = [{
       name:'allen',
       age:25
   },{name:'fancy',age:23},{
       name:'cui',
       age:26
   }]
});