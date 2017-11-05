(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('SocialDetailController', SocialDetailController);

    SocialDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Social'];

    function SocialDetailController($scope, $rootScope, $stateParams, previousState, entity, Social) {
        var vm = this;

        vm.social = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('rockbible2App:socialUpdate', function(event, result) {
            vm.social = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
