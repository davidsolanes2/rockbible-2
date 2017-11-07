(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('AlbumDetailController', AlbumDetailController);

    AlbumDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Album', 'Band', 'Song', 'ValoracionAlbum', 'UserExt'];

    function AlbumDetailController($scope, $rootScope, $stateParams, previousState, entity, Album, Band, Song, ValoracionAlbum, UserExt) {
        var vm = this;

        vm.album = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:albumUpdate', function(event, result) {
            vm.album = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
