(function() {
    'use strict';
    angular
        .module('rockbible2App')
        .factory('Artist', Artist);

    Artist.$inject = ['$resource', 'DateUtils'];

    function Artist ($resource, DateUtils) {
        var resourceUrl =  'api/artists/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.born = DateUtils.convertLocalDateFromServer(data.born);
                    }
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.born = DateUtils.convertLocalDateToServer(copy.born);
                    return angular.toJson(copy);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    var copy = angular.copy(data);
                    copy.born = DateUtils.convertLocalDateToServer(copy.born);
                    return angular.toJson(copy);
                }
            }
        });
    }
})();
