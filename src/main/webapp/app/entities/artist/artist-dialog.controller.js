(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('ArtistDialogController', ArtistDialogController);

    ArtistDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Artist', 'Band', 'Country', 'Label', 'Review', 'ValoracionArtist', 'Instrument'];

    function ArtistDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Artist, Band, Country, Label, Review, ValoracionArtist, Instrument) {
        var vm = this;

        vm.artist = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.bands = Band.query();
        vm.countries = Country.query();
        vm.labels = Label.query();
        vm.reviews = Review.query();
        vm.valoracionartists = ValoracionArtist.query();
        vm.instruments = Instrument.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.artist.id !== null) {
                Artist.update(vm.artist, onSaveSuccess, onSaveError);
            } else {
                Artist.save(vm.artist, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('rockbible2App:artistUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.born = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
