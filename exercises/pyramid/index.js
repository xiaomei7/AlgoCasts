// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	// last row has: 2n - 1 # with no spaces
	// n row
	// each row has 2 * row number - 1 pounds with (2n - 1) - (2 * row number - 1) spaces
	// each size has ((2n - 1) - (2 * row number - 1)) // 2 spaces
	// each row has 2 * row number - 1 pounds in the middle

	const lastRowStep = 2 * n - 1;
	for (let i = 1; i <= n; i++) {
		const sidespaces = (lastRowStep - (2 * i - 1)) / 2;
		const steps = 2 * i - 1;
		let thisRow = ' '.repeat(sidespaces) + '#'.repeat(steps) + ' '.repeat(sidespaces);
		console.log(thisRow);
	}
}

module.exports = pyramid;
