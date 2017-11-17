(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionBandDetailController', ValoracionBandDetailController);

    ValoracionBandDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'ValoracionBand', 'Band', 'User'];

    function ValoracionBandDetailController($scope, $rootScope, $stateParams, previousState, entity, ValoracionBand, Band, User) {
        var vm = this;

        vm.valoracionBand = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:valoracionBandUpdate', function(event, result) {
            vm.valoracionBand = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
