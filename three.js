function myFunction(){
    var firstSide=document.getElementById("firstSide").value;
    alert(firstSide)


    var secondSide=document.getElementById("secondSide").value;
    alert(secondSide)


    var thirdSide=document.getElementById("thirdSide").value;
    alert(thirdSide)
   
}
function myNumber(){
    var firstSide=parseInt(document.getElementById("firstSide").value);
    var secondSide=parseInt(document.getElementById("secondSide").value);
    var thirdSide=parseInt(document.getElementById("thirdSide").value);
}




    if (firstSide===secondSide&&thrirdSide===firstSide&&secondSide===thirdSide){

alert("Equilateral triangle");

console.log("Equilateral");}

else if("firstSide===secondSide||firstSide===thirdside||secondSide===thirdSide"){

alert("Isoseles triangle");

console.log("Isosele triangle")}

else if (firstSide+secondSide>thirdSide&&firstSide+thirdSide>secondSide&&secondSide+thirdSide>firstSide{
    
alert("scale triangle")

console.log("scalene triangle")
}

else {alert("Not triangle")}


