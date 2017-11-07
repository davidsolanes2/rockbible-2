(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('CollectionDialogController', CollectionDialogController);

    CollectionDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', '$q', 'entity', 'Collection', 'User'];

    function CollectionDialogController ($timeout, $scope, $stateParams, $uibModalInstance, $q, entity, Collection, User) {
        var vm = this;

        vm.collection = entity;
        vm.clear = clear;
        vm.save = save;
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.collection.id !== null) {
                Collection.update(vm.collection, onSaveSuccess, onSaveError);
            } else {
                Collection.save(vm.collection, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('rockbible2App:collectionUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
