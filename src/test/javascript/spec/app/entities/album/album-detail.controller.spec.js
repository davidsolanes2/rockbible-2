'use strict';

describe('Controller Tests', function() {

    describe('Album Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPreviousState, MockAlbum, MockBand, MockSong, MockValoracionAlbum, MockUserExt;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPreviousState = jasmine.createSpy('MockPreviousState');
            MockAlbum = jasmine.createSpy('MockAlbum');
            MockBand = jasmine.createSpy('MockBand');
            MockSong = jasmine.createSpy('MockSong');
            MockValoracionAlbum = jasmine.createSpy('MockValoracionAlbum');
            MockUserExt = jasmine.createSpy('MockUserExt');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity,
                'previousState': MockPreviousState,
                'Album': MockAlbum,
                'Band': MockBand,
                'Song': MockSong,
                'ValoracionAlbum': MockValoracionAlbum,
                'UserExt': MockUserExt
            };
            createController = function() {
                $injector.get('$controller')("AlbumDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'rockbible2App:albumUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
