//Created a welcome message for the user//

var welcome=prompt("Welcome to my page! Please answer a few questions that will help you get to know me...Click OK to continue...")

//Created a counter to obtain data from the user and later communicate with the user about their progress

var counter=0


//These are the questions about me to the user//

var answer1=prompt("Is my name Amina?");

	if ((answer1==="yes")||(answer1==="Yes")||(answer1==="y")||(answer1==="Y"))	{

		counter++;

		document.getElementById("1").innerHTML="Yes! My name is Amina"}



var answer2=prompt("Do I have 5 children?");

	if ((answer2==="yes")||(answer2==="Yes")||(answer2==="y")||(answer2==="Y")) {

		counter++;

		document.getElementById("2").innerHTML="Yes! I have 5 children!"}

var answer3=prompt("Do I play the Trombone?");

	if ((answer3==="yes")||(answer3==="Yes")||(answer3==="y")||(answer3==="Y"))	{

		counter++;

			document.getElementById("3").innerHTML="Yes! I play the Trombone!"}


//Numerical variable question

var number=prompt("What is my favorite number?")

	if(number==17)	{

			counter++;

			document.getElementById("4").innerHTML="Yes!";


	}


	else if(number<17)	{

		document.getElementById("4").innerHTML="Too low!";
	}

	else if(number>17) {

		document.getElementById("4").innerHTML="Too high!";
	}

// End of questions results from the counter

		document.getElementById("5").innerHTML="Great! You answered "+counter+" correct! You know me!"
//End of questions.
