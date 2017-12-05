$(document).ready(function() {
  listCats();
  nextCat();
  previousCat();
  //loadCat();
})


// Cat index on User home
function listCats () {
  $.getJSON("/cats", function(cats){
    $.each(cats, function(index, cat) {
      $("#cat_list").append(
                            "<li>" +
                            "<a href=\"/cats/" +
                            cat.id +
                            "\">" +
                            cat.name +
                            "</a>" +
                            "</li>")
    })
  })
}


// Cat show page: Load cat
function loadCat(catData) {
  $(".cat-name").text(catData.name);
  $(".cat-color").text(catData.color);
  $(".trick-list").empty();
  $.each(catData.tricks, function(index, trick) {
    $(".trick-list").append(
                            "<li>" +
                            "<a href=\"/tricks/" +
                            trick.id +
                            "\">" +
                            trick.name +
                            "</a>" +
                            "</li>")
  })

  $(".cat-comments").empty();
  $.each(catData.comment, function(index, comment) {
    $(".cat-comments").append(
                            "<li>" +
                            comment.body +
                            "</li>")
  })

  //Updates cat_id params when URL isn't updated. There has to be a better way?
  $(".js-next").attr("data-id", catData.id);
  $(".js-previous").attr("data-id", catData.id);
  $("#comment_cat_id").attr("value", catData.id);
}

// Cat show page: Next
function nextCat() {
  $(".js-next").on("click", function() {
    var currentCatId = parseInt($(".js-next").attr("data-id"));
    $.getJSON("/cats", function(cats){
      var currentIndex = cats.map(function(element) {
        return element.id;
      }).indexOf(currentCatId);
      var nextCat = cats[currentIndex + 1];
      loadCat(nextCat);
    })
  })
}

// Cat show page: Previous
function previousCat() {
  $(".js-previous").on("click", function() {
    var currentCatId = parseInt($(".js-previous").attr("data-id"));
    $.getJSON("/cats", function(cats){
      var currentIndex = cats.map(function(element) {
        return element.id;
      }).indexOf(currentCatId);
      var previousCat = cats[currentIndex - 1];
      loadCat(previousCat);
    })
  })
}

//Cat show page: Add Comment via AJAX
$(function() {
  $("#new_comment").on("submit", function(e) {
    var catId = parseInt($("#comment_cat_id").attr("value"));
    postUrl = "/cats/" + catId + "/comments";
    $.ajax({
      url: postUrl,
      data: $(this).serialize(),
      dataType: "json",
      method: "POST",
      success: function(response) {
        $(".cat-comments").append(
                                "<li>" +
                                response.body +
                                "</li>");
      }
    })
    $("#comment_body").val("");
    e.preventDefault();
  })
})
