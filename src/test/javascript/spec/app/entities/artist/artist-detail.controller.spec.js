'use strict';

describe('Controller Tests', function() {

    describe('Artist Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockArtist, MockBand, MockCountry, MockLabel, MockReview, MockValoracionArtist, MockInstrument;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockArtist = jasmine.createSpy('MockArtist');
            MockBand = jasmine.createSpy('MockBand');
            MockCountry = jasmine.createSpy('MockCountry');
            MockLabel = jasmine.createSpy('MockLabel');
            MockReview = jasmine.createSpy('MockReview');
            MockValoracionArtist = jasmine.createSpy('MockValoracionArtist');
            MockInstrument = jasmine.createSpy('MockInstrument');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Artist': MockArtist,
                'Band': MockBand,
                'Country': MockCountry,
                'Label': MockLabel,
                'Review': MockReview,
                'ValoracionArtist': MockValoracionArtist,
                'Instrument': MockInstrument
            };
            createController = function() {
                $injector.get('$controller')("ArtistDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'rockbible2App:artistUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
