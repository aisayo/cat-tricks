// Cat index on User home
$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/cats",
  }).done(function(cats){
    $.each(cats, function(index, cat) {
      $("#cat_list").append("<li>" + cat.name + "</li>")
    })
  })
})
