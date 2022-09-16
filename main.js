
const panoramaImage = new PANOLENS.ImagePanorama("images/panoramic.png");
const panoramaHallway = new PANOLENS.ImagePanorama("images/hallway.jpg")
const imageContainer = document.querySelector(".image-container");
const pumpkin = document.querySelector('#pumpkin');
const skull = document.querySelector('#skull');

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  controlBar: false,
  output: 'console',
});

infoSpot1 = new PANOLENS.Infospot(300, "images/transparent.png");
infoSpot1.position.set(-2422.20, -3215.64, -2956.15);
infoSpot1.addHoverElement( pumpkin, 150 );

infoSpot2 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infoSpot2.position.set(-4344.37, -70.24, 2465.97);
infoSpot2.addHoverText("Go To The Hallway");
infoSpot2.addEventListener('click', function(){
  viewer.setPanorama(panoramaHallway);
  this.dispose();
})

infoSpot3 = new PANOLENS.Infospot(500, "images/t.png");
infoSpot3.position.set(4473.74, -2109.04, 667.03);
infoSpot3.addHoverElement( skull, 150 );

panoramaImage.add(infoSpot1, infoSpot2, infoSpot3);
viewer.add(panoramaImage, panoramaHallway);

