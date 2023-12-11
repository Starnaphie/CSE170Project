function toggleMap() {
   console.log("Button pressed");

   // switch to real images
   let imageURLs = [
      "https://drive.google.com/uc?export=view&id=1a5G6BvjD6tmRZVr9ibyw2T6mTeqBSA2y",
      "https://drive.google.com/uc?export=view&id=11Ph5JjJu3P-fJDovDPiohVnrfx4O_Cp3" 
   ];

   // gym sections: https://drive.google.com/file/d/1a5G6BvjD6tmRZVr9ibyw2T6mTeqBSA2y/view?usp=sharing
   // full gym: https://drive.google.com/file/d/11Ph5JjJu3P-fJDovDPiohVnrfx4O_Cp3/view?usp=sharing

   let currMap = Number(document.getElementsByClassName("mapImage")[0].id);
   if (currMap == 0) {
      document.getElementById('mapButton').innerHTML = "View In Sections";
   } else {
      document.getElementById('mapButton').innerHTML = "View Full Gym";
   }

   let newMap = (currMap + 1) % imageURLs.length;
  
   let newElt = document.createElement('img');
   newElt.classList.add("mapImage");
   newElt.id = newMap.toString();
   newElt.src = imageURLs[newMap];
   document.getElementsByClassName("mapImage")[0].replaceWith(newElt);
}
