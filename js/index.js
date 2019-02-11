window.onload = function() {

  $.get("https://api.punkapi.com/v2/beers", function(data) {
    console.log(data);

    data.forEach((beer, i) =>{

      $('<div />').attr({
        "class": "beers"
      }).appendTo("#beerList")

      let thisBeer = $($(".beers")[i])

      $('<img />').attr({
        "src": beer.image_url,
        "width": 100
      }).appendTo(thisBeer)

      $('<h2 />').text(beer.name).appendTo(thisBeer);

      $('<h3 />').text(beer.tagline).appendTo(thisBeer);

      $('<p />').text("first brewery: " + beer.first_brewed).appendTo(thisBeer);



    })



  })

}


let listScroll = 0;

$("#beerList").bind("mousewheel", function(evt) {
  // console.log(evt.originalEvent.wheelDelta);

  let beerListSize = $(".beers").length * 250;

  let stopRight = (beerListSize - (beerListSize*2)) + $(window).width();

  if(evt.originalEvent.wheelDelta <= -120 && listScroll >= stopRight){

    listScroll -= 75

  } else if (evt.originalEvent.wheelDelta >= 120 && listScroll <= -1) {

    listScroll += 75

  }

  $("#beerList").css("left", listScroll + "px")

  console.log(listScroll);

})
