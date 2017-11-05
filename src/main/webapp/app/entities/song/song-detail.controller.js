(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('SongDetailController', SongDetailController);

    SongDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Song'];

    function SongDetailController($scope, $rootScope, $stateParams, previousState, entity, Song) {
        var vm = this;

        vm.song = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:songUpdate', function(event, result) {
            vm.song = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
