var catIndexes;

$(document).ready(function() {
  listCats();
  nextCat();
  previousCat();
  loadCatIndexes();
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
  $.each(catData.comment, function(index, data) {
    var comment = new Comment(data);
    var commentLi = comment.renderLi();
    $(".cat-comments").append(commentLi);
  })

  //Updates cat_id params when URL isn't updated.
  $(".js-next").attr("data-id", catData.id);
  $(".js-previous").attr("data-id", catData.id);
  $("#comment_cat_id").attr("value", catData.id);
}



// User's cat index to determine prev/next
function loadCatIndexes() {
  $.getJSON("/cat_indexes", function(cats){
    catIndexes = cats;
  })
}

function findCatIndex(id) {
  var currentIndex = catIndexes.indexOf(id);
  return currentIndex;
}


// Cat show page: Next
function nextCat() {
  $(".js-next").on("click", function() {
    $.getJSON("/cats", function(cats){
      var currentCatId = parseInt($(".js-next").attr("data-id"));
      var nextId = findCatIndex(currentCatId) + 1;
      var nextCat = cats[nextId];
      loadCat(nextCat);
    })
  })
}


// Cat show page: Previous
function previousCat() {
  $(".js-previous").on("click", function() {
    $.getJSON("/cats", function(cats){
      var currentCatId = parseInt($(".js-previous").attr("data-id"));
      var prevId = findCatIndex(currentCatId) - 1;
      var prevCat = cats[prevId];
      loadCat(prevCat);
    })
  })
}


//Comment Model Object
function Comment(attributes) {
  this.body = attributes.body;
}

Comment.success = function(response){
  var comment = new Comment(response);
  var commentLi = comment.renderLi();
  $(".cat-comments").append(commentLi);
  $("#comment-error").empty();
  $("#comment_body").val("");
}

Comment.error = function(){
  console.log("test")
  $("#comment-error").text("Please enter a comment.");
}

Comment.prototype.renderLi = function() {
  var html = "";
  html += "<li>" + this.body + "</li>";
  return html;
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
    })
    .success(Comment.success)
    .error(Comment.error);
    e.preventDefault();
  })
})
