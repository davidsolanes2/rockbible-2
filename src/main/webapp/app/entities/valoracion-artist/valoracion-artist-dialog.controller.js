(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionArtistDialogController', ValoracionArtistDialogController);

    ValoracionArtistDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ValoracionArtist', 'Artist', 'User'];

    function ValoracionArtistDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ValoracionArtist, Artist, User) {
        var vm = this;

        vm.valoracionArtist = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.artists = Artist.query();
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.valoracionArtist.id !== null) {
                ValoracionArtist.update(vm.valoracionArtist, onSaveSuccess, onSaveError);
            } else {
                ValoracionArtist.save(vm.valoracionArtist, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('rockbible2App:valoracionArtistUpdate', result);
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
