(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ArtistController', ArtistController);

    ArtistController.$inject = ['Artist'];

    function ArtistController(Artist) {

        var vm = this;

        vm.artists = [];

        loadAll();

        function loadAll() {
            Artist.query(function(result) {
                vm.artists = result;
                vm.searchQuery = null;
            });
        }
    }
})();
