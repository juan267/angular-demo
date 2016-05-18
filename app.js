var app = angular.module('flapperNews', [])

app.controller('MainCtrl', ["$scope", "posts" ,function($scope, posts){
  $scope.brand = "Maker News"
  $scope.posts = posts.posts

  $scope.addPost = function(){
    if( !$scope.title || $scope.title === ''){return;}
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0
    })
    $scope.title = ''
    $scope.title = ''
  }

  $scope.addVote = function(post){
    post.upvotes += 1
  }
}])

app.factory('posts', function(){
  var o = {
    posts: []
  }
  return o
})
