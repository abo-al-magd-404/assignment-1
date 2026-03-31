# Assignment 1 – JavaScript Concepts & Coding Practice

> **Name:** Mohamed Mahmoud Abo Al Magd  
> **Group:** Node_C45_Mon&Thurs_8:30pm (Online)

## Overview

This repository contains solutions for an assignment focused on core JavaScript programming concepts. It features practical coding challenges and concise essay responses, demonstrating modern JavaScript syntax, ES6+ features, and fundamental concepts such as hoisting, iteration, and asynchronicity.

## Contents

- `Assignment_1.js`: Main JavaScript file containing both coding exercises and comprehensive short-answer explanations of core JS topics.
- `bonus.js`: Bonus exercise implementing a functional counter with increment, decrement, and reset operations.
- `.gitignore`: Standard configuration for ignoring IDE and environment files.

## Tech Stack

- **Language:** JavaScript (ES6+)
- **Runtime:** Node.js (or any compatible JS environment)

## Features & Highlights

### Coding Solutions

- Type conversion and arithmetic operations
- Conditional logic and validation functions
- Array iteration using both `for` loops and functional programming methods (`filter`, `map`)
- Spread operator for array merging
- Switch-case for mapping numeric values to weekdays
- Object destructuring, dynamic sum calculation using rest/spread syntax
- Arrow functions and Promises (including async timeout logic)
- Utility functions for common array and string operations (finding max, key extraction, string splitting)

### Essay Explanations

- Differences between `forEach` and `for...of` loops
- JavaScript hoisting and the Temporal Dead Zone (TDZ)
- Difference between `==` and `===`
- Role of `try-catch` in handling async programming errors
- Type conversion vs type coercion in JavaScript

### Bonus: Counter Module

- `createCounter(init)`: Returns an object with `increment`, `decrement`, and `reset` methods, encapsulated using closures.

## Example Usage

### Bonus Counter
```javascript
const counter = createCounter(5);
counter.increment(); // 6
counter.reset();     // 5
counter.decrement(); // 4
```

## How to Run

1. **Clone the Repo:**
   ```bash
   git clone https://github.com/abo-al-magd-404/assignment-1.git
   cd assignment-1
   ```

2. **Run Solutions:**
   ```
   node Assignment_1.js
   node bonus.js
   ```

   > Ensure Node.js is installed on your system.

## Author

- **Mohamed Mahmoud Abo Al Magd**

---

This assignment demonstrates a command of fundamental and intermediate JavaScript skills with clear code, best practices, and explanatory commentary.
