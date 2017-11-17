(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionBandDeleteController',ValoracionBandDeleteController);

    ValoracionBandDeleteController.$inject = ['$uibModalInstance', 'entity', 'ValoracionBand'];

    function ValoracionBandDeleteController($uibModalInstance, entity, ValoracionBand) {
        var vm = this;

        vm.valoracionBand = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ValoracionBand.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
