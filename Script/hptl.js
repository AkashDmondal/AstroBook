function changeImage(){
var imageOne = document.getElementById("image1").style;
var imageTwo = document.getElementById("image2").style;
if(imageOne.visibility == "visible")
{
imageOne.visibility="hidden";
imageTwo.visibility="visible";
}
else {
imageOne.visibility="visible";
imageTwo.visibility="hidden";
}}