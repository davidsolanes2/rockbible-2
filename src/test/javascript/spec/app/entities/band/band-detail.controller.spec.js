'use strict';

describe('Controller Tests', function() {

    describe('Band Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockBand, MockGenre, MockCountry, MockLabel, MockAlbum, MockArtist, MockValoracionBand;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockBand = jasmine.createSpy('MockBand');
            MockGenre = jasmine.createSpy('MockGenre');
            MockCountry = jasmine.createSpy('MockCountry');
            MockLabel = jasmine.createSpy('MockLabel');
            MockAlbum = jasmine.createSpy('MockAlbum');
            MockArtist = jasmine.createSpy('MockArtist');
            MockValoracionBand = jasmine.createSpy('MockValoracionBand');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Band': MockBand,
                'Genre': MockGenre,
                'Country': MockCountry,
                'Label': MockLabel,
                'Album': MockAlbum,
                'Artist': MockArtist,
                'ValoracionBand': MockValoracionBand
            };
            createController = function() {
                $injector.get('$controller')("BandDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'rockbible2App:bandUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
