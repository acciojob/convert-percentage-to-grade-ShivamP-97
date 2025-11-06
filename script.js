function calculateGrade(percentage) {
	if(typeof percentage!=="number"|| isNaN(percentage)){
		return "F";
	}
	const score=Math.round(percentage);
	if(score>=90){
		return "A";
	}else if(score>="80"){
		return "B";
	}else if(score>="70"){
		return "C";
	}else if(score>="60"){
		return "D";
	}else{
		return "F";
	}
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
