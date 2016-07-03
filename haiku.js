var fs = require('fs');


var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
	return fs.readFileSync(file).toString();
}

function createHaiku(array){    

	var oneSyl = [];
	var twoSyl = [];
	var threeSyl = [];
	var fourSyl = [];
	var fiveSyl = [];
	var sixSyl = [];
	var sevenSyl = [];
	var eightSyl = [];
	var nineSyl = [];
	var generatedHaiku = "";

	var lines = cmudictFile.toString().split("\n")
	lines.forEach(function(line){    
		var lineSplit = line.split("  "); 
		if (lineSplit[1] != undefined) {
			var someVal = String(lineSplit[1].match(/\d/gi));
			someVal = someVal.split(',')

			if(someVal.length === 1) {
				if(!/\W/.test(lineSplit[0])) {
					oneSyl.push(lineSplit[0]);
				}
			}
			if(someVal.length === 2) {
				if(!/\W/.test(lineSplit[0])) {
					twoSyl.push(lineSplit[0]);
				}
			}
			if(someVal.length === 3) {
				if(!/\W/.test(lineSplit[0])) {
					threeSyl.push(lineSplit[0]);
				}
			}
			if(someVal.length === 4) {
				if(!/\W/.test(lineSplit[0])) {
					fourSyl.push(lineSplit[0]);
				}
			}
			if(someVal.length === 5) {
				if(!/\W/.test(lineSplit[0])) {
					fiveSyl.push(lineSplit[0]);
				}
			}
			if(someVal.length === 6) {
				if(!/\W/.test(lineSplit[0])) {
					sixSyl.push(lineSplit[0]);
				}
			}
			if(someVal.length === 7) {
				if(!/\W/.test(lineSplit[0])) {
					sevenSyl.push(lineSplit[0]);
				}
			}
			if(someVal.length === 8) {
				if(!/\W/.test(lineSplit[0])) {
					eightSyl.push(lineSplit[0]);
				}
			}
			if(someVal.length === 9) {
				if(!/\W/.test(lineSplit[0])) {
					nineSyl.push(lineSplit[0]);
				}
			}
																											
		}
	});
	for (j = 0; j < array.length; j++) {
		for(i = 0; i < array[j].length; i++) {
			if(array[j][i] === 1){
				var randomSelection = Math.floor(Math.random() * oneSyl.length);
				generatedHaiku += oneSyl[randomSelection];
			}
			if(array[j][i] === 2){
				var randomSelection = Math.floor(Math.random() * twoSyl.length);
				generatedHaiku += twoSyl[randomSelection];
			}
			if(array[j][i] === 3){
				var randomSelection = Math.floor(Math.random() * threeSyl.length);
				generatedHaiku += threeSyl[randomSelection];
			}
			if(array[j][i] === 4){
				var randomSelection = Math.floor(Math.random() * fourSyl.length);
				generatedHaiku += fourSyl[randomSelection]; 
			}
			if(array[j][i] === 5){
				var randomSelection = Math.floor(Math.random() * fiveSyl.length);
				generatedHaiku += fiveSyl[randomSelection];
			}
			if(array[j][i] === 6){
				var randomSelection = Math.floor(Math.random() * sixSyl.length);
				generatedHaiku += sixSyl[randomSelection];
			}
			if(array[j][i] === 7){
				var randomSelection = Math.floor(Math.random() * sevenSyl.length);
				generatedHaiku += sevenSyl[randomSelection];
			}
			if(array[j][i] === 8){
				var randomSelection = Math.floor(Math.random() * eightSyl.length);
				generatedHaiku += eightSyl[randomSelection];
			}
			if(array[j][i] === 9){
				var randomSelection = Math.floor(Math.random() * eightSyl.length);
				generatedHaiku += eightSyl[randomSelection];
			}
			generatedHaiku += " ";																									
		}
	 	generatedHaiku += "\n"
	}
		generatedHaiku = generatedHaiku.substring(0, generatedHaiku.length - 2)
		console.log(generatedHaiku);

	}

createHaiku([[2], [3], [4]]);
