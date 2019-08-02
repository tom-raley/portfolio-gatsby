---
path: "/blog/recursive-functions-in-js"
date: "2019-08-02"
title: "Simplifying Recursive Functions in JavaScript"
image: math.jpeg
author: 'Tom Raley'
---

## Don't Be Scared By Recursive Functions

I repeat. Don't be scared by recursive functions. When I first started programming, things like "recursion" and "closures" sounded so computer sciencey that I immediately shut them out and told myself that as a self-taught dev, I'd likely never understand them, so I should learn how to live without them.

The more I used JavaScript, though, the more I became comfortable with the basics and more advanced concepts started to make sense to me. For instance, a closure is really just when an outer function calls an inner function using one of the outer function's variables. Not too hard to understand at a base level.

I had a similar experience with recursive functions, or recursion, and wanted to do a quick code snippet to illustrate that this fancy word isn't so scary after all.

## Breaking Down Recursive Functions
At a base level, a recursive function is a function that calls itself. That's it. How this plays out in the real world is actually pretty cool!

Say you want to find the factorial of a certain number, _n_. If _n_ is 4, the factorial would be the product of 4 * 3 * 2 * 1. 

With a standard for loop, this can be done relatively easily:

```
function factorial(n) {
  let total = 1;
  for(let i = n; i > 0; i--){
    total *= i
  }
  return total;
}
```

This is a fairly clean way of doing this. However, with recursion, we can make this function even simpler:

```
function factorial(n){
   if(n <= 1){
       return 1
   }
   return n * factorial(n - 1);
}
```

## How to Write A Recursive Function

There are two main elements to a recursive function:
1. Base case
2. Changed input

In the above example, our base case is `if(n <= 1) return 1`. This ensures that as we decrease the value of `n`, eventually the recursion will stop running. Otherwise, the function will continue to run forever and you may get an error similar to "Maximum call stack size reached". This will break things. So make sure you have a base case that is reachable so your code eventually ends.

The second piece of a recursive function is the additional function call. The function essentially calls itself again, but with a modified argument, in our case `n`. We subtract 1 from `n` each time the function runs and then call the function again. Because of  JavaScript's call stack, this additional function call gets placed at the top of the stack and nothing else will run until it is completed. By adding additional function calls on top of each one, we can create a sequence of function calls.

In the example above, `n` starts at 4 and is passed to the function which returns `n * factorial(n - 1)`. When `factorial()` is called again with this changed input, the original `factorial()` call is paused while it waits for this new call to finish. Because we are decrementing `n` each time the function runs and calling the function again with the decremented input, we essentially have 4 function calls happening all within the same function:

```
factorial(4); // returns 4 * 6  since factorial(3) returns 6
factorial(3); // returns 3 * 2 since factorial(2) returns 2
factorial(2); // returns 2 * 1 since factorial(1) returns 1
factorial(1); // base case, function will return 1
```

So, our final solution is 24, since factorial(4) essentially runs `4 * 6`.

## Recursion Demystified

Recursion often seems scary at first, but understanding how simple(r) examples work, and breaking each function down piece by piece to see what it's really doing can help demystify them a little bit. This is not to say that recursive functions are easy to learn--they most certainly are not. But breaking off small pieces and getting an understanding of them can help you build the foundation to explore and understand much more complicated examples.

