// function mostPopular(s) {
//   let ltr_obj = {};
//   let high = 0;
//   let ltr;
//   for (let letter of s) {
//     const count = ltr_obj[letter] || 0;
//     const nc = count + 1;
//     ltr_obj[letter] = nc;
//     if (nc >= high) {
//       high = nc;
//       ltr = letter;
//     }
//   }
//   return ltr;
// }

// refactored

function mostPopular(string){
	let letterCount = {}
	let highestLetterCount = 0;
	let letterWithHighestCount;

	for (let letter of string){
		letterCount[letter] ? letterCount[letter]++ : letterCount[letter] = 1;
		let currentLetterCount = letterCount[leter];
		// update highest letter count
		if(currentLetterCount > highestLetterCount){
			highestLetterCount = currentLetterCount;
			letterWithHighestCount = letter;
		}
	}

	return letterWithHighestCount;
}