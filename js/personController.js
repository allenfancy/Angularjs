/**
 * Created by allen on 15/9/23.
 */
var app = angular.module("myApp",[]);
app.controller('myCtl',function($scope){
    $scope.person = {
        firstName:'allen',
        lastName:'fancy',
    }
    $scope.fullName = function(){
        var x = $scope.person;

        return x.firstName + '    ' + x.lastName;
    }
})