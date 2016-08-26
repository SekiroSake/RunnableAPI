/**
 * 
 */
app.factory('words', ['$http', function($http) {
  return $http.get('/words')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
                conosle.log('cannot get data');
              return err;
            });
}]);