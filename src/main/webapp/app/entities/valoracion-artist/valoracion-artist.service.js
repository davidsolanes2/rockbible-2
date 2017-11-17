(function() {
    'use strict';
    angular
        .module('rockbible2App')
        .factory('ValoracionArtist', ValoracionArtist);

    ValoracionArtist.$inject = ['$resource', 'DateUtils'];

    function ValoracionArtist ($resource, DateUtils) {
        var resourceUrl =  'api/valoracion-artists/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.timestamp = DateUtils.convertDateTimeFromServer(data.timestamp);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
