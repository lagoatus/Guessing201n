//Created a welcome message for the user//

var welcome=prompt("Welcome to my page! Please answer a few questions that will help you get to know me...Click OK to continue...")

//Created a counter to obtain data from the user and later communicate with the user about their progress

var counter=0


//These are the questions about me to the user//

var answer1=prompt("Is my name Amina?");

	if (answer1=="yes"||"Yes"||"y"||"Y")	{

		alert("Yes! My name is Amina")}

//no else statement is included so the alert will pop-up even if the answer is incorrect

var answer2=prompt("Do I have 5 children?");

	if(answer2=="yes"||"Yes"||"y"||"Y") {

		alert("Yes! I have 5 children!")}

var answer3=prompt("Do I play the Trombone?");

	if(answer3=="yes"||"Yes"||"y"||"Y")	{

			alert("Yes! I play the Trombone!")}


//Numerical variable question

var number=prompt("What is my favorite number?")

	if(number==17)	{

			alert("Yes!")
	}


	else if(number<17)	{

		alert("Too low!")
	}

	else if(number>17) {

		alert("Too high!")
	}

// End of questions results from the counter

		alert("Great! You answered ____ correct! You know me!")
//End of questions.