(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('LabelDetailController', LabelDetailController);

    LabelDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Label', 'Band', 'Artist'];

    function LabelDetailController($scope, $rootScope, $stateParams, previousState, entity, Label, Band, Artist) {
        var vm = this;

        vm.label = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:labelUpdate', function(event, result) {
            vm.label = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
