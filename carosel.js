var x = 0;
var images = new Array(
    "./assets/images/products/green_diamond_ring.jpg", 
    "./assets/images/products/blue_sapphire_ring.jpg",
    "./assets/images/products/header-image.jpg",
    "./assets/images/products/green_stone_amulet.jpg",
    );
var i = setInterval(auto, 2500);

function auto()
  {
    x++;
    if (x == images.length)
       x=0;
    document.getElementById('bigImage').src=images[x];      
  }