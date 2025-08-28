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

### 5.5 A phonebook where the keys are names and values are phone numbers. The names are as follows: Esther, Ben, Bob, and Dan.
#### 1. Return “1” for all input.
Bad distribution, all items go to the same bucket
#### 2. Use the length of the string as the index.
Bad distribution, all items that start with the same letter collide in the same bucket
#### 3. Use the first character of the string as the index. So, all strings starting with a are hashed together, and so on.
Bad distribution, beacause all items that starts with the same letter collapses in the same bucket
#### 4. Map every letter to a prime number: a = 2, b = 3, c = 5, d = 7, e = 11, and so on. For a string, the hash function is the sum of all the characters modulo the size of the hash. For example, if your hash size is 10, and the string is “bag,” the index is (3 + 2 + 17) % 10 = 22 % 10 = 2.
Good distribution for the example

### 5.6 A mapping from battery size to power. The sizes are A, AA, AAA, and AAAA.
#### 1. Return “1” for all input.
Bad distribution, all items go to the same bucket
#### 2. Use the length of the string as the index.
Good distribution for the example
#### 3. Use the first character of the string as the index. So, all strings starting with a are hashed together, and so on.
Bad distribution, beacause all items that starts with the same letter collapses in the same bucket
#### 4. Map every letter to a prime number: a = 2, b = 3, c = 5, d = 7, e = 11, and so on. For a string, the hash function is the sum of all the characters modulo the size of the hash. For example, if your hash size is 10, and the string is “bag,” the index is (3 + 2 + 17) % 10 = 22 % 10 = 2.
Good distribution for the example

### 5.7 A mapping from book titles to authors. The titles are Maus, Fun Home, and Watchmen.
#### 1. Return “1” for all input.
Bad distribution, all items go to the same bucket
#### 2. Use the length of the string as the index.
Bad distribution, all items that start with the same letter collide in the same bucket
#### 3. Use the first character of the string as the index. So, all strings starting with a are hashed together, and so on.
Good distribution for the example
#### 4. Map every letter to a prime number: a = 2, b = 3, c = 5, d = 7, e = 11, and so on. For a string, the hash function is the sum of all the characters modulo the size of the hash. For example, if your hash size is 10, and the string is “bag,” the index is (3 + 2 + 17) % 10 = 22 % 10 = 2.
Good distribution for the example