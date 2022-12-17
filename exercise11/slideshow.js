var num = 0;

//Replace with your own values and add additional lines for more images
imgArray = [
  ['images/star_cluster.png'],
  ['images/rocket_launch.png'],
  ['images/space.png'],
  ['images/curiosity_mars.png'],
  ['images/cosmic_cloud.png'],
  ['images/jupiter.png'],
  ['images/space_2.png'],
  ['images/cosmic_cloud_2.png']
]

//Function called by clicking on 'next' link
//Replace id name with the id name you gave to the img
function slideshowUp() {
  num++;
  num = num % imgArray.length;
  document.getElementById('space').src=imgArray[num];
}

//Function called by clicking on 'previous' link
function slideshowBack() {
  num--;
  if (num < 0) {num=imgArray.length-1;}
  num = num % imgArray.length;
  document.getElementById('space').src=imgArray[num];
}
