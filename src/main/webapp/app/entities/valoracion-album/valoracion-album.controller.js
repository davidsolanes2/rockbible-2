(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionAlbumController', ValoracionAlbumController);

    ValoracionAlbumController.$inject = ['ValoracionAlbum'];

    function ValoracionAlbumController(ValoracionAlbum) {

        var vm = this;

        vm.valoracionAlbums = [];

        loadAll();

        function loadAll() {
            ValoracionAlbum.query(function(result) {
                vm.valoracionAlbums = result;
                vm.searchQuery = null;
            });
        }
    }
})();
