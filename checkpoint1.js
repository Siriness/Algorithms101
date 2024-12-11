function insertionSort(arr) {
  // Go through each element in the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    let currentNumber = arr[i]; // Store the current element
    let position = i - 1; // Start comparing with the previous element

    // Move numbers greater than the current number one position to the right
    while (position >= 0 && arr[position] > currentNumber) {
      arr[position + 1] = arr[position]; // Move the larger element one position to the right
      position--; // Move one position to the left
    }

    // insert the current number in the correct position
    arr[position + 1] = currentNumber;
  }

  return arr; // Return the sorted array
}

// For Example:
let numbers = [4, 3, 2, 8];
console.log(insertionSort(numbers)); // Output: [2, 3, 4, 8]
