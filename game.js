//Created a welcome message for the user//

var welcome=prompt("Welcome to my page! Please answer a few questions that will help you get to know me...Click OK to continue...")

//Created a counter to obtain data from the user and later communicate with the user about their progress

var counter=0

//This is the function I created to repeat an action that is happening repeatedly

function answersResponse(question, response) {

	var answer1=prompt(question);

		if ((answer1==="yes")||(answer1==="Yes")||(answer1==="y")||(answer1==="Y"))	{

			counter++;

			document.getElementById("1").innerHTML=(response)}
			

}
//These are the questions about me to the user//
answersResponse ("Is my name Amina?", "Yes! My name is Amina");

answersResponse ("Do I have 5 children?", "Yes! I have 5 children!");

answersResponse ("Do I play the Trombone?", "Yes! I play the Trombone!");




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
