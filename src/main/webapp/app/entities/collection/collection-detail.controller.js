(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('CollectionDetailController', CollectionDetailController);

    CollectionDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Collection', 'User'];

    function CollectionDetailController($scope, $rootScope, $stateParams, previousState, entity, Collection, User) {
        var vm = this;

        vm.collection = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:collectionUpdate', function(event, result) {
            vm.collection = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
