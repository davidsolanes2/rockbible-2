(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionAlbumDialogController', ValoracionAlbumDialogController);

    ValoracionAlbumDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ValoracionAlbum', 'Album', 'User'];

    function ValoracionAlbumDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ValoracionAlbum, Album, User) {
        var vm = this;

        vm.valoracionAlbum = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.albums = Album.query();
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.valoracionAlbum.id !== null) {
                ValoracionAlbum.update(vm.valoracionAlbum, onSaveSuccess, onSaveError);
            } else {
                ValoracionAlbum.save(vm.valoracionAlbum, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('rockbible2App:valoracionAlbumUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.timestamp = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
