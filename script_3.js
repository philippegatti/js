let stages ="";
stages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

for(let count = 1; count <= stages; count++ ) {
	console.log(" ".repeat(stages-count)+"#".repeat(count));	
	}



