// Array of mailboxes (elements)
const mailboxes = ['A', 'B', 'C', 'D', 'E'];

// Linear search function
function linearSearch(arr, target) {
    // Start from the first mailbox
    for (let i = 0; i < arr.length; i++) {
        // Check if the current mailbox contains the target letter
        if (arr[i] === target) {
            // Return the index of the mailbox if found
            return i;
        }
    }
    // Return -1 if the target letter is not found in any mailbox
    return -1;
}

// Test the function
const targetLetter = 'C';
const result = linearSearch(mailboxes, targetLetter);
console.log(`Letter ${targetLetter} found at index: ${result}`);
