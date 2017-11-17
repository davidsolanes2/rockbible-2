(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionArtistDeleteController',ValoracionArtistDeleteController);

    ValoracionArtistDeleteController.$inject = ['$uibModalInstance', 'entity', 'ValoracionArtist'];

    function ValoracionArtistDeleteController($uibModalInstance, entity, ValoracionArtist) {
        var vm = this;

        vm.valoracionArtist = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ValoracionArtist.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
