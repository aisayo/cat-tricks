$(document).ready(function() {
  listCats();
  nextCat();
  previousCat();
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

  $(".js-next").attr("data-id", catData.id);
  $(".js-previous").attr("data-id", catData.id);
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
