$(document).ready(function(){

  /*Requests a random quote */
  $.ajax({
    url: "https://quotesondesign.com/wp-json/wp/v2/posts/",
    success: function(q){
      let post = q[Math.floor(Math.random() * 9) + 1];
      $("#quote").html(post.content.rendered + " — " + post.title.rendered);
      console.log($('#quote').text());
    },
    cache: false
  });

  $("#newquote-btn").on("click", function(){
    $.ajax({
    url: "https://quotesondesign.com/wp-json/wp/v2/posts?filter[orderby]=rand",
    success: function(q){
      let post = q[Math.floor(Math.random() * 9) + 1];
      $("#quote").html(post.content.rendered + " — " + post.title.rendered)
    },
      cache: false
    });
  });
  
  $('a').click(function(){
    $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + $('#quote').text());
  })
});

/*let safeColors = ['00', '33','66','99','cc', 'ff'];
let rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
};*/
