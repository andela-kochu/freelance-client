'use strict';

angular.module('freelanceApp')
  .factory('JobService', ['$http', function($http) {
    var baseUrl = "http://freelance-app.herokuapp.com/api/v1";
    var jobObject = {
      jobs: []
    };
    jobObject.getAll = function(){
      return $http.get(baseUrl + "/jobs").success(function(data){
        angular.copy(data, jobObject.jobs);
      });
    };
    jobObject.getSingle = function(params){
      return $http.get(baseUrl + "/jobs/" + params).then(function(res){
        return res.data;
      });
    };
    return jobObject;
    /*jobObject.upvote = function(post){
      return $http.put('/posts/' + post._id + '/upvote').success(function(data){
        post.upvotes +=1;
      });
    };*/
}]);

