# Hash tables

## Notes

### Hash tables

Hash tables have keys and values. They store data in an array and can find an item in O(1) using the key.

### Hash functions

To achieve that, a hash table uses a hash function that returns a number for the specific key, this is the index of the element in the array.

For the same key, the hash function must always return the same number.

## Exercises

### 5.1 f(x) = 1      ← Returns 1 for all input
Is consistent but all of the keys overlaps into the same field

### 5.2 f(x) = rand()      ← Returns a random number every time
No, because every time returns a random numbers, thats not consistent

### 5.3 f(x) = next_empty_slot()      ← Returns the index of the next empty slot in the hash table
No, because every time returns the index of a new number, not depends on x

### 5.4 f(x) = len(x)      ← Uses the length of the string as the index
Is consistent but maybe a bad idea because all the strings that have the same length overlaps