$(document).ready(function() {
  $.getJSON('http://www.freecodecamp.com/news/hot', function(json) {
    for (var i = json.length-1; i >= 0; i--) {
      $("<div class='col-sm-4 text-center align'>" + "<a href=" + json[i].link + " target='_blank'><img src=" + json[i].author.picture + "></a>" + "<br><br><p>" + json[i].headline.substring(0,40) + "..." + "</p>" + "<p>" + "Upvotes: " + json[i].rank + "&nbsp&nbsp&nbsp&nbspCamper: " + json[i].author.username + "</p>" + "</div>").insertAfter(".appending_link");
    }
  });
});