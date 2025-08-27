# Recursion

## Notes

### Recursive case
The recursive case is the part of a function where it calls itself on a smaller or simpler input, moving the problem closer to the base case

### Base case
The base case is the condition that stops the recursion. Without a base case, the function would keep calling itself indefinitely and eventually cause a **stack overflow**

## The call stack
When one function calls another, the caller pauses and its state is pushed onto the call stack. The called function runs to completion; when it returns, its stack frame is popped, and the caller resumes. The call stack is LIFO (last in, first out)

## Exercises

### 3.1 What information can you give me, just based on this call stack?
1. The **GREET2** function is at the top of the call stack; it's the function currently executing
2. **GREET** called **GREET2**, so **GREET** is paused until **GREET2** returns
3. Each stack has a variable ```name='Maggie'```

### 3.2 Suppose you accidentally write a recursive function that runs forever. As you saw, your computer allocates memory on the stack for each function call. What happens to the stack when your recursive function runs forever?
Each recursive call adds a new frame to the call stack. Without a base case, the stack keeps growing until it runs out of space, causing a stack overflow and the program crashes