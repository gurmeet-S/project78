  function nextslide()
  {
    var images = [
      "pp.jpg",
      "mom.jpg",
      "me.jpg",
      "simar",
      ];
      var i =0;
    if(i == 9)
  { i=0; } 
  document.getElementById("album").src = images[i];
  i++;
   
}