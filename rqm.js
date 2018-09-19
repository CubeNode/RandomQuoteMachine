$(document).ready(function(){
  //$('body').css('background-color', randomColor());

  $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: function(q){
      var post = q.shift();
      $("#quote").html(post.content + "— " + post.title);
    },
    cache: false
  });

  $("#newquote").on("click", function(){
    $.ajax({
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    success: function(q){
      var post = q.shift();
      $("#quote").html(post.content + "— " + post.title)
    },
      cache: false
    });
    //$('.quote-btn').css('background-color', randomColor());
    $('.jumbotron').css('background-color', randomColor());
    //$('body').css('background-color', randomColor());
  });

  $(".twitter-share").on("click", function()      {
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + $('#quote').text());
   });
});

var safeColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};
