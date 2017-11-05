(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionSongDialogController', ValoracionSongDialogController);

    ValoracionSongDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ValoracionSong'];

    function ValoracionSongDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ValoracionSong) {
        var vm = this;

        vm.valoracionSong = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.valoracionSong.id !== null) {
                ValoracionSong.update(vm.valoracionSong, onSaveSuccess, onSaveError);
            } else {
                ValoracionSong.save(vm.valoracionSong, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('rockbible2App:valoracionSongUpdate', result);
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
