(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('SexDetailController', SexDetailController);

    SexDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Sex'];

    function SexDetailController($scope, $rootScope, $stateParams, previousState, entity, Sex) {
        var vm = this;

        vm.sex = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:sexUpdate', function(event, result) {
            vm.sex = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
