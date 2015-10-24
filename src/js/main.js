// (function(){
//   console.log($.ajax("../apis/github/users/octocat.json"));
// })();

// IIFE stands for
// Immediately-invoked function expression

// The purple function at the top is how you start an IIFE

// The function is then defined btw the curly braces

// $('ul.tabs').each(function(){
//   var $active = $(this).find("a");
// })

// // PREVIOUS WORKING CODE
$('ul.tabs').each(function(){
   // For each set of tabs, we want to keep track of
   // which tab is active and it's associated content
   var $active, $content, $links = $(this).find('a');

   // If the location.hash matches one of the links, use that as the active tab.
   // If no match is found, use the first link as the initial active tab.
   $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
   $active.addClass('active');

   $content = $($active[0].hash);

   // Hide the remaining content
   $links.not($active).each(function () {
     $(this.hash).hide();
   });

   // Bind the click event handler
   $(this).on('click', 'a', function(e){
     // Make the old tab inactive.
     $active.removeClass('active');
     $content.hide();

     // Update the variables with the new link and content
     $active = $(this);
     $content = $(this.hash);

     // Make the tab active.
     $active.addClass('active');
     $content.show();

     // Prevent the anchor's default click action
     e.preventDefault();
   });
 });


// Time to try to get that jQuery.getJSON to work!
 // var userApiUrl = ("../../apis/github/users/jeremyrist.json");

//PREVIOUS WORKING CODE
$.ajax({
  // url: userApiUrl,
  url: "https://api.github.com/users/jeremyrist",
  dataType: 'json',
  success: function(json)
  {
      _.templateSettings.variable = 'm'
      var template = _.template($('#lodashTemp').html())
      var user = json;
      $('.test').after(template(user));


      // $('.small-column h1').text( json.name );
      // $('.small-column h2').text( json.login);
  }
})

// Homework code from John
;(function(){

 angular.module('TIY-GitHub', [ ])
   .run(function($http, $rootScope){

     $http.get('/apis/github/users/jeremyrist.json')
       .then(function (response){
        //  $rootScope.login = response.data.login;
         $rootScope.jeremy = response.data;
       })
   })

   .run(function($http, $rootScope){
     $http.get('/apis/github/comments/comments.json')
       .then(function (response){
        //  $rootScope.login = response.data.login;
         $rootScope.body = response.data;
       })
     })
   })(); //END IIFE

  //  .run(function($http, $rootScope){
   //
  //    $http.get('apis/github/users/jeremyrist/repositories.json')
  //      .then(function (response){
  //        $rootScope.repo4 = response.data[4];
  //      });
   //
  //  })
   //
  //  .run(function($http, $rootScope){
   //
  //    $http.get('apis/github/users/jeremyrist/repositories.json')
  //      .then(function (response){
  //        $rootScope.repo3 = response.data[3];
  //      });
   //
  //  })
   //
  //  .run(function($http, $rootScope){
   //
  //    $http.get('apis/github/users/jeremyrist/repositories.json')
  //      .then(function (response){
  //        $rootScope.repo2 = response.data[2];
  //      });

  //  })

// })(); //END IIFE

// lodash.template

// using custom template delimiters
// _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
// var sideView = $('#lodashTemp');
// var compiled = _.template(sideView, {variable: 'user'});
// compiled({ 'name': 'mustache' });
//
// console.log(compiled);
// → 'hello mustache!'
