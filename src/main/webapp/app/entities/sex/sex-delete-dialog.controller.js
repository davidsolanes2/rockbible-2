(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('SexDeleteController',SexDeleteController);

    SexDeleteController.$inject = ['$uibModalInstance', 'entity', 'Sex'];

    function SexDeleteController($uibModalInstance, entity, Sex) {
        var vm = this;

        vm.sex = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Sex.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
