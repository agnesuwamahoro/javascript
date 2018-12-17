/*function myFunction(){
    var firstSide=document.getElementById("sideOne").value;
    alert(firstSide)


    var secondSide=document.getElementById("sideTwo").value;
    alert(secondSide)


    var thirdSide=document.getElementById("sideThree").value;
    alert(thirdSide)
   
}*/
function myNumber(){
    var firstSide=document.getElementById("sideOne").value;
    var secondSide=document.getElementById("sideTwo").value;
    var thirdSide=document.getElementById("sideThree").value;





    if (firstSide===secondSide && firstSide===thirdSide ){

     alert("Equilateral triangle");

    }

    else if(firstSide===secondSide||firstSide===thirdside||secondSide===thirdSide){

    alert("Isoseles triangle");

   }

   else if (firstSide+secondSide>thirdSide&&firstSide+thirdSide>secondSide&&secondSide+thirdSide>firstSide){
    
   alert("scale triangle")


  }

  else {
    alert("Not triangle");
  }

}
