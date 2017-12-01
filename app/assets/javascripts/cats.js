$(document).ready(function() {
  listCats();
  nextCat();
})


// Cat index on User home
function listCats () {
  $.getJSON("/cats", function(cats){
    $.each(cats, function(index, cat) {
      $("#cat_list").append(
        "<li>" +
        "<a href=\"cats/" +
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
      var nextCat = cats[currentIndex+1];
      console.log(nextCat);
      $(".cat-name").text(nextCat.name);
      $(".cat-color").text(nextCat.color);
      $(".js-next").attr("data-id", nextCat.id);
    })
  })
}
// function nextCat() {
//   $(".js-next").on("click", function() {
//     var currentId = parseInt($(".js-next").attr("data-id"))
//     $.getJSON("/cats", function (cats) {
//       $.each(cats, function(i, cat) {
//         var prevId = cats[i-1]
//         console.log(prevId)
//       })
//     })
//   })
// }
