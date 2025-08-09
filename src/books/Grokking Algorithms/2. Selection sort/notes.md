# Selection sort

## Notes

### Computer Memory
Computer memory is like a set of drawers where we can store data, and each drawer has its own unique address so we can find it easily.

### Array
It’s a contiguous data structure, meaning that in arrays, the data is stored in consecutive memory slots.

| Insert | Read | Delete |
| -------- | -------- | -------- | 
| O(n) | O(1) | O(n) |

### Linked Lists
In linked lists, the data can be stored anywhere in memory, and each item contains the address of the next item in the list.

| Insert | Read | Delete |
| ----- | -------- | -------- | 
| O(1) | O(n) | O(1)|

#### Pointers
A pointer is a space in memory that holds the address of another item in the list, allowing the program to find the next element.

## Exercises

### 2.1 Suppose you’re building an app to keep track of your finances. Every day, you write down everything you spent money on. At the end of the month, you review your expenses and sum up how much you spent. So you have lots of inserts and a few reads. Should you use an array or a list?

***R.)*** I should use a linked list because insertions are O(1), and since there are only a few reads, the O(n) read time is acceptable. In contrast, with an array, insertions can be O(n) (because elements may need to be shifted), even though reads are O(1). 

### 2.2 Suppose you’re building an app for restaurants to take customer orders. Your app needs to store a list of orders. Servers keep adding orders to this list, and chefs take orders off the list and make them. It’s an order queue: servers add orders to the back of the queue, and the chef takes the first order off the queue and cooks it.

***R.)*** I should use a linked list because a queue doesn’t require random access. With a linked list that keeps references to both the head and tail, adding to the back and removing from the front can each be done in O(1) time.

### 2.3 Let’s run a thought experiment. Suppose Facebook keeps a list of usernames. When someone tries to log in to Facebook, a search is done for their username. If their name is in the list of usernames, they can log in. People log in to Facebook pretty often, so there are a lot of searches through this list of usernames. Suppose Facebook uses binary search to search the list. Binary search needs random access—you need to be able to get to the middle of the list of usernames instantly. Knowing this, would you implement the list as an array or a linked list?

***R.)*** In this case, I should use an array because binary search requires random access to quickly reach the middle element during each step of the search.

### 2.4 People sign up for Facebook pretty often, too. Suppose you decided to use an array to store the list of users. What are the downsides of an array for inserts? In particular, suppose you’re using binary search to search for logins. What happens when you add new users to an array?

***R.)*** When we add a new user to a sorted array, we may need to insert them somewhere in the middle or at the start. This requires shifting all subsequent elements to make room, which is an O(n) operation.

### 2.5 In reality, Facebook uses neither an array nor a linked list to store user information. Let’s consider a hybrid data structure: an array of linked lists. You have an array with 26 slots. Each slot points to a linked list. For example, the first slot in the array points to a linked list containing all the usernames starting with A. The second slot points to a linked list containing all the usernames starting with B, and so on.

***R.)*** This hybrid data structure combines the advantages of arrays and linked lists. We can use the array for O(1) random access to quickly find the list corresponding to the first letter of a username. Then, within that linked list, we can insert at the head or tail in O(1) time.