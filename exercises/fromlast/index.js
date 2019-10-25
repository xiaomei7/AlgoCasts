// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
	// 2 Pointers, Slow and Fast.
	let slow, fast;
	slow = fast = list.getFirst();

	// Point Fast n steps from head.
	while(n !== 0) {
		fast = fast.next;
		n--;
	}

	// Advance both Slow and Fast, 1 by 1, until Fast reaches the last node.
	while(fast.next) {
		slow = slow.next;
		fast = fast.next;
	}

	// The Slow is the answer.
	return slow;
}

module.exports = fromLast;
