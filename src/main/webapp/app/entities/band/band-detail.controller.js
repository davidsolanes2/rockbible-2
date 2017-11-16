(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('BandDetailController', BandDetailController);

    BandDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Band', 'Country', 'Label', 'Album', 'Artist', 'ValoracionBand', 'Genre'];

    function BandDetailController($scope, $rootScope, $stateParams, previousState, entity, Band, Country, Label, Album, Artist, ValoracionBand, Genre) {
        var vm = this;

        vm.band = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:bandUpdate', function(event, result) {
            vm.band = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
