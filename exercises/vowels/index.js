// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function isVowel(c) {
	return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

function vowels(str) {
	let numVowels = 0;
	for (let char of str) {
		if (isVowel(char)) numVowels++;
	}

	return numVowels;
	 
}

module.exports = vowels;
