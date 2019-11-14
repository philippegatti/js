

function answer (question) {
	if (question[question.length-1] == "?") {
		return "Ouais Ouais..."
	}

	else if (question != "" && question === question.toUpperCase()) {
		return   "Pwa, calme-toi..." 
	} 
	else if (question.split(" ").includes("Fortnite")) {
		return   "on s' fait une partie soum-soum ?"
	}
	else if (question == "") {
		return "t'es en PLS ?"
	}
	else {
		return "balek."
	}
};

var input="";
while (true) {
    input = prompt(`tu veux quoi? (tape "Ta gueule" pour fermer le bot)`);
    if (input == "Ta gueule") {
    	console.log(`${input} => c'est ça casse toi`);
    	break;
    }
    else{
    	console.log(`${input} => ${answer(input)}`);
    }
};

