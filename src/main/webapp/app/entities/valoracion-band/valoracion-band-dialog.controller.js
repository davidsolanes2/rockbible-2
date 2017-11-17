(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionBandDialogController', ValoracionBandDialogController);

    ValoracionBandDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ValoracionBand', 'Band', 'User'];

    function ValoracionBandDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ValoracionBand, Band, User) {
        var vm = this;

        vm.valoracionBand = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.bands = Band.query();
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.valoracionBand.id !== null) {
                ValoracionBand.update(vm.valoracionBand, onSaveSuccess, onSaveError);
            } else {
                ValoracionBand.save(vm.valoracionBand, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('rockbible2App:valoracionBandUpdate', result);
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
