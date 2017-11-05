(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionSongDeleteController',ValoracionSongDeleteController);

    ValoracionSongDeleteController.$inject = ['$uibModalInstance', 'entity', 'ValoracionSong'];

    function ValoracionSongDeleteController($uibModalInstance, entity, ValoracionSong) {
        var vm = this;

        vm.valoracionSong = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ValoracionSong.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
