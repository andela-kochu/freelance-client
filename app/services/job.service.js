'use strict';

angular.module('freelanceApp')
  .factory('JobService', ['$http', function($http) {
    var baseUrl = "http://freelance-app.herokuapp.com/api/v1";
    var jobObject = {
      jobs: [],
      userJobs: []
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

    jobObject.postJob = function(data){
      return $http.post(baseUrl + "/jobs/", data).then(function(res){
        return res.data;
      });
    };

    jobObject.getUserJob = function(){
      return $http.get(baseUrl + "/user/jobs/").then(function(res){
        console.log(res.data)
       angular.copy(res.data, jobObject.userJobs);
      });
    };

    return jobObject;
    /*jobObject.upvote = function(post){
      return $http.put('/posts/' + post._id + '/upvote').success(function(data){
        post.upvotes +=1;
      });
    };*/
}]);

