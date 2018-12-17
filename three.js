/*function myFunction(){
    var numbers[0]=document.getElementById("sideOne").value;
    alert(numbers[0])


    var numbers[1]=document.getElementById("sideTwo").value;
    alert(numbers[1])


    var numbers[2]=document.getElementById("sideThree").value;
    alert(numbers[2])
   
}*/
function myNumber(){
    var numbers=[sideOne,sideTwo,sideThree]
    numbers[0]=document.getElementById("sideOne").value;
    numbers[1]=document.getElementById("sideTwo").value;
    numbers[2]=document.getElementById("sideThree").value;
    




    if (numbers[0]===numbers[1] && numbers[0]===numbers[2] ){

     alert("Equilateral triangle");

    }

    else if(numbers[0]===numbers[1] && numbers[0]===numbers[2] && numbers[1]===numbers[2]){

    alert("Isoseles triangle");

   }

   else if (numbers[0]+numbers[1]>numbers[2]&&numbers[0]+numbers[2]>numbers[1]&&numbers[1]+numbers[2]>numbers[0]){
    
   alert("scale triangle")


  }

  else {
    alert("Not triangle");
  }

}
function myReset(){
    document.getElementById("angles").reset();
}
