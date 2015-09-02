// Copyright 2015 Elijah Jensen / Jensen Dynamics
// All Rights Reserved
//
//
// Resistor Calculator 




//################ HTML CODE ON LOAD FOR THIS TOOL ###################
function onloadres(){
var colors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white","gold","silver"];


var htmlcode = "<p>Resistor Color Code Calculator</p> <!--<button onclick='calcresistor()'>Calculate</button> --> <select id='band1' name='Color' onclick='calcresistor()'> <option value='0' style='background-color:black'>Black</option> <option value='1' style='background-color:brown'>Brown</option><option value='2' style='background-color:red'>Red</option>/<option value='3' style='background-color:orange'>Orange</option>/<option value='4' style='background-color:yellow'>Yellow</option>/<option value='5' style='background-color:green'>Green</option>/<option value='6' style='background-color:blue'>Blue</option>/<option value='7' style='background-color:violet'>Violet</option>/<option value='8' style='background-color:grey'></option>/<option value='9' style='background-color:white' >White</option>/</select> &nbsp <select id='band2' name='Color2' onclick='calcresistor()' ><option value='0' style='background-color:black'>Black</option><option value='1' style='background-color:brown'>Brown</option><option value='2' style='background-color:red'>Red</option><option value='3' style='background-color:orange'>Orange</option><option value='4' style='background-color:yellow'>Yellow</option><option value='5' style='background-color:green'>Green</option><option value='6' style='background-color:blue'>Blue</option><option value='7' style='background-color:violet'>Violet</option><option value='8' style='background-color:grey'></option><option value='9' style='background-color:white' >White</option></select>  &nbsp  <select id='band3' name='Color2' onclick='calcresistor()'><option value='0' style='background-color:black'>Black</option><option value='1' style='background-color:brown'>Brown</option><option value='2' style='background-color:red'>Red</option><option value='3' style='background-color:orange'>Orange</option><option value='4' style='background-color:yellow'>Yellow</option><option value='5' style='background-color:green'>Green</option><option value='6' style='background-color:blue'>Blue</option></select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select id='band4' name='Color2' onclick='calcresistor()'><option value='1' style='background-color:brown'>Brown</option><option value='2' style='background-color:red'>Red</option><option value='10' style='background-color:gold' selected='selected'>Gold</option><option value='11' style='background-color:silver'>Silver</option></select><p id='demo'> 0.0 &Omega;</p>";


       document.getElementById("apptext").innerHTML = htmlcode;
        var band1 = document.getElementById("band1").value;
	var band2 = document.getElementById("band2").value;
	var band3 = document.getElementById("band3").value;
	var band4 = document.getElementById("band4").value;

        document.getElementById("band1").style.background=colors[band1];
	document.getElementById("band2").style.background=colors[band2];
	document.getElementById("band3").style.background=colors[band3];
	document.getElementById("band4").style.background=colors[band4];

}





// ####################CALCULATOR FUNCTION FOR TOOL ###############//
function calcresistor(){
	//parseFloat();

	var colors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white","gold","silver"];
	
	var band1 = document.getElementById("band1").value;
	var band2 = document.getElementById("band2").value;
	var band3 = document.getElementById("band3").value;
	var band4 = document.getElementById("band4").value;
	
	var output = band1 + band2; //+ " &Omega;" ;
	var number = parseFloat(output);
	
	number= number*(Math.pow(10,parseFloat(band3)));



	document.getElementById("band1").style.background=colors[band1];
	document.getElementById("band2").style.background=colors[band2];
	document.getElementById("band3").style.background=colors[band3];
	document.getElementById("band4").style.background=colors[band4];
	



	if(number <1000)
	{
	
	document.getElementById("demo").innerHTML = number + " &Omega;";
	}
	else if(number>=1000 && number <1000000)
	{
		number = number/1000;
		document.getElementById("demo").innerHTML = number + " k&Omega;";

	
	
	
	}
	else{
	number = number/1000000;
	document.getElementById("demo").innerHTML = number + " M&Omega;";
	
	}
}


