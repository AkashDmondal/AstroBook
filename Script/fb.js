function validate() {
var myArray = new Array();
for(var i=0;i<document.myForm.length;i++)
{
if(document.myForm.elements[i].value.length==0)
{
myArray.push(document.myForm.elements[i].name);
}
}
if(myArray.length!=0)
{
alert("the following Text Boxes are Empty:\n"+myArray);
}
}
</script>
<script>
function confirmm()
{
	if (confirm("Sure you want to Reset"))
	{
	button.reset();
	}
	else
	{
	return false;
	}
}	
function toup(){
	
	var x=document.getElementById("fname");
	x.value=x.value.toUpperCase();
	}
function toUp(){
	
	var x = document.getElementById("lname");
    x.value = x.value.toUpperCase();
	}
function toUpper(){
	
	var x=document.getElementById("mname");
	x.value=x.value.toUpperCase();
	}	
function myFunction(x)
{
x.style.background = "lightblue";
}


function propmtbox()
	{
	var txt;
	var ratings=prompt("Enter from 0-10");
	if(ratings == null || ratings==" " || ratings <=5)
	{
	  txt = "Thank you for your feedback. We will try our best to improvise";
	}
	else
	{
	  txt = "You rated us" +ratings+ "/10, We really appreciate your feedback";
	}
	 document.getElementById("rating").innerHTML = txt;
	}
