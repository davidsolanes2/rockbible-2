(function() {
    'use strict';

    angular
        .module('rockbible2App')
        .controller('BandDialogController', BandDialogController);

    BandDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Band', 'Country', 'Label', 'Album', 'Artist', 'ValoracionBand', 'Genre'];

    function BandDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Band, Country, Label, Album, Artist, ValoracionBand, Genre) {
        var vm = this;

        vm.band = entity;
        vm.clear = clear;
        vm.save = save;
        vm.countries = Country.query();
        vm.labels = Label.query();
        vm.albums = Album.query();
        vm.artists = Artist.query();
        vm.valoracionbands = ValoracionBand.query();
        vm.genres = Genre.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.band.id !== null) {
                Band.update(vm.band, onSaveSuccess, onSaveError);
            } else {
                Band.save(vm.band, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('rockbible2App:bandUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
