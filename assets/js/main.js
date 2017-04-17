var taymanModal = document.getElementById("taymanModal");
var img = document.getElementById("taymanImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.addEventListener ("click", function(){
  taymanModal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});

var span = document.getElementsByClassName("close")[0];
span.addEventListener ("click", function() {
  taymanModal.style.display = "none";
}); 
