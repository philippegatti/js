const arn1 = "CCGUCGUUGCGCUACAGC";
const arn2 = "CCUCGCCGGUACUUCUCG";    



function name (arn) {
arn.match(/.{1,3}/g).map(function(codon) {

	if ((codon == "UCU") || (codon == "UCC") || (codon == "UCA") || (codon == "UCG") || (codon == "AGU") || (codon == "AGC")) {
		codon = "Sérine";} 
	else if ((codon == "CCU") || (codon == "CCC") || (codon == "CCA") || (codon == "CCG")) {
		codon = "Proline";} 
	else if (codon == "UUA" || codon == "UUG") {
		codon = "Leucine";} 
	else if (codon == "UUU" || codon == "UUC") {
		codon = "Phénylalanine";} 
	else if (codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG") {
		codon = "Arginine";} 
	else if (codon == "UAU" || codon == "UAC") {
		codon = "Tyrosine";}
	});
};

console.log(name(arn1));
console.log(name(arn2));

name(arn1);