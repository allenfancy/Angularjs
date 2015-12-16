/**
 * Created by allen on 15/9/24.
 */
angular.module('myApp',[]).controller('myCtrl',function($scope){
    $scope.fName = '';
    $scope.lName = '';
    $scope.passw1 = '';
    $scope.passw2 = '';
    $scope.users = [
        {id:1,fName:'allen',lName:'Iverson'},
        {id:2,fName:'allen1',lName:'Iverson1'},
        {id:3,fName:'allen2',lName:'Iverson2'},
        {id:4,fName:'allen3',lName:'Iverson3'},
        {id:5,fName:'allen4',lName:'Iverson4'},
        {id:6,fName:'allen5',lName:'Iverson5'},
        {id:7,fName:'allen6',lName:'Iverson6'},
        {id:8,fName:'allen7',lName:'Iverson7'},
        ];
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.editUser = function(id){
        if(id == 'new'){
            $scope.edit = true;
            $scope.incomplete = true;
            $scope.fName = '';
            $scope.lName = '';
        }else{
            $scope.edit = false;
            $scope.fName = $scope.users[id-1].fName;
            $scope.lName = $scope.users[id-1].lName;
        }
    }

    $scope.$watch('passw1',function() {
        $scope.test();
    });
    $scope.$watch('passw2',function() {
        $scope.test();
    });
    $scope.$watch('fName',function() {
        $scope.test();
    });
    $scope.$watch('lName',function() {
        $scope.test();
    });


    $scope.test = function() {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fName.length ||
            !$scope.lName.length ||
            !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };

});