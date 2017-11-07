'use strict';

describe('Controller Tests', function() {

    describe('Song Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockSong, MockAlbum, MockValoracionSong;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockSong = jasmine.createSpy('MockSong');
            MockAlbum = jasmine.createSpy('MockAlbum');
            MockValoracionSong = jasmine.createSpy('MockValoracionSong');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Song': MockSong,
                'Album': MockAlbum,
                'ValoracionSong': MockValoracionSong
            };
            createController = function() {
                $injector.get('$controller')("SongDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'rockbible2App:songUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
