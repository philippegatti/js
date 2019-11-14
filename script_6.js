const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";    



function name (codon) {

	var name = "";
	if ((codon == "UCU") || (codon == "UCC") || (codon == "UCA") || (codon == "UCG") || (codon == "AGU") || (codon == "AGC")) {
		name = "Sérine";} 
	else if ((codon == "CCU") || (codon == "CCC") || (codon == "CCA") || (codon == "CCG")) {
		name = "Proline";} 
	else if (codon == "UUA" || codon == "UUG") {
		name = "Leucine";} 
	else if (codon == "UUU" || codon == "UUC") {
		name = "Phénylalanine";} 
	else if (codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG") {
		name = "Arginine";} 
	else if (codon == "UAU" || codon == "UAC") {
		name = "Tyrosine";}
	return name
};

function translater (arn) {
	return arn.match(/.{1,3}/g).map(codon => codon=name(codon)).join(`-`)
};


console.log(`le premier ARN correspond à cette séquence de protéines : ${translater(arn1)}`);
console.log(`le second ARN correspond à cette séquence de protéines : ${translater(arn2)}`);
