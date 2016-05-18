var app = angular.module('flapperNews', [])

app.controller('MainCtrl', function($scope){
  $scope.brand = "Maker News"

  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 5},
    {title: 'post 3', upvotes: 5},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 11}
  ]

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
})
