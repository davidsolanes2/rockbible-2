(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('LabelDialogController', LabelDialogController);

    LabelDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Label', 'Band', 'Artist'];

    function LabelDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Label, Band, Artist) {
        var vm = this;

        vm.label = entity;
        vm.clear = clear;
        vm.save = save;
        vm.bands = Band.query();
        vm.artists = Artist.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.label.id !== null) {
                Label.update(vm.label, onSaveSuccess, onSaveError);
            } else {
                Label.save(vm.label, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('rockbible2App:labelUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
