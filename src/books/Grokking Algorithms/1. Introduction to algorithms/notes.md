# Notes - Introuction to algorithms

## Exercises

### 1.1 Suppose you have a sorted list of 128 names, and you’re searching through it using binary search. What’s the maximum number of steps it would take?
***R.)*** 7 -> Because 2^7 = 128

### 1.2 Suppose you double the size of the list. What’s the maximum number of steps now?
***R.)*** 8 -> Because 2^8 = 25

### 1.3 You have a name, and you want to find the person’s phone number in the phone book.
***R.)*** O(log n) -> Because I can split (binary search

### 1.4 You have a phone number, and you want to find the person’s name in the phone book.
 (Hint: You’ll have to search through the whole book//
***R.)*** O(n) -> Because I have to iterate over the whole boo

### 1.5 You want to read the numbers of every person in the phone book.
***R.)*** O(n) -> Because I have to iterate over the whole boo

### 1.6 You want to read the numbers of just the As. (This is a tricky one! It involves concepts that are covered more in chapter 4. Read the answer—you may be surprised!)
***R.)*** O(log n + k) -> Because I can do a binary search to find the A's but then k to read all the number