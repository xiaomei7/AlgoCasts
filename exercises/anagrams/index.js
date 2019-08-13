// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function stringMap(str) {
	const charMap = {};

	str = str.replace(/[^\w]/g, "").toLowerCase();

	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	return charMap;
}

function sortMap(unordered) {
	const ordered = {};

	Object.keys(unordered).sort().forEach(function(key) {
	  ordered[key] = unordered[key];
	});

	return ordered;
}

function anagrams(stringA, stringB) {
	const a = stringMap(stringA);
	const b = stringMap(stringB);

	const orderedA = sortMap(a);
	const orderedB = sortMap(b);

	if (Object.keys(orderedA).length !== Object.keys(orderedB).length) return false;

	return JSON.stringify(orderedA) === JSON.stringify(orderedB);
}

module.exports = anagrams;
