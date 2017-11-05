(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionSongController', ValoracionSongController);

    ValoracionSongController.$inject = ['ValoracionSong'];

    function ValoracionSongController(ValoracionSong) {

        var vm = this;

        vm.valoracionSongs = [];

        loadAll();

        function loadAll() {
            ValoracionSong.query(function(result) {
                vm.valoracionSongs = result;
                vm.searchQuery = null;
            });
        }
    }
})();
