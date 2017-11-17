(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ValoracionArtistController', ValoracionArtistController);

    ValoracionArtistController.$inject = ['ValoracionArtist'];

    function ValoracionArtistController(ValoracionArtist) {

        var vm = this;

        vm.valoracionArtists = [];

        loadAll();

        function loadAll() {
            ValoracionArtist.query(function(result) {
                vm.valoracionArtists = result;
                vm.searchQuery = null;
            });
        }
    }
})();
