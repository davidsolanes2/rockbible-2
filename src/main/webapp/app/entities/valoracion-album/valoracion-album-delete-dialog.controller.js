(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionAlbumDeleteController',ValoracionAlbumDeleteController);

    ValoracionAlbumDeleteController.$inject = ['$uibModalInstance', 'entity', 'ValoracionAlbum'];

    function ValoracionAlbumDeleteController($uibModalInstance, entity, ValoracionAlbum) {
        var vm = this;

        vm.valoracionAlbum = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ValoracionAlbum.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
