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


// Cat show page: Next
function nextCat() {
  $(".js-next").on("click", function() {
    var currentCatId = parseInt($(".js-next").attr("data-id"));
    $.getJSON("/cats", function(cats){
      var currentIndex = cats.map(function(element) {
        return element.id;
      }).indexOf(currentCatId);
      var nextCat = cats[currentIndex + 1];
      $(".cat-name").text(nextCat.name);
      $(".cat-color").text(nextCat.color);
      $(".trick-list").empty();
      $.each(nextCat.tricks, function(index, trick) {
        $(".trick-list").append(
                                "<li>" +
                                "<a href=\"/tricks/" +
                                trick.id +
                                "\">" +
                                trick.name +
                                "</a>" +
                                "</li>")
      })

      $(".js-next").attr("data-id", nextCat.id);

      if (nextCat === cats[cats.length - 1]) {
        $(".js-previous").attr("data-id", nextCat.id);
      } else {
        $(".js-previous").attr("data-id", currentCatId);
      }
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
      $(".cat-name").text(previousCat.name);
      $(".cat-color").text(previousCat.color);
      $(".trick-list").empty();
      $.each(previousCat.tricks, function(index, trick) {
        $(".trick-list").append(
                                "<li>" +
                                "<a href=\"/tricks/" +
                                trick.id +
                                "\">" +
                                trick.name +
                                "</a>" +
                                "</li>")
      })

      $(".js-previous").attr("data-id", previousCat.id);

      if (previousCat === cats[0]) {
        $(".js-next").attr("data-id", previousCat.id);
      } else {
        $(".js-next").attr("data-id", currentCatId);
      }
    })
  })
}
