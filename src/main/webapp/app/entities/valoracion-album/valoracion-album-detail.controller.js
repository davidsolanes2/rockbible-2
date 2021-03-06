(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionAlbumDetailController', ValoracionAlbumDetailController);

    ValoracionAlbumDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'ValoracionAlbum', 'Album', 'User'];

    function ValoracionAlbumDetailController($scope, $rootScope, $stateParams, previousState, entity, ValoracionAlbum, Album, User) {
        var vm = this;

        vm.valoracionAlbum = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:valoracionAlbumUpdate', function(event, result) {
            vm.valoracionAlbum = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
