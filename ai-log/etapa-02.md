# Stage 2: AI log

## Tools

- ChatGPT
- Visual Studio Code
- Google Chrome Developer Tools

## Conversations

- ChatGPT conversation about implementing the JavaScript data logic for the CinemaTicket application.
- ChatGPT conversation about testing the JavaScript functions in the browser console.

## Key requests

### 1. Create the JavaScript data model

- Asked: Create the JavaScript data structure for the CinemaTicket application using the existing cinema ticket sample data.
- Got: An array containing three cinema tickets with information about the film, state, ticket type, cinema hall, time, seat and projection type.
- Changed or rejected: The data was adapted to the CinemaTicket project and to the existing sample data from Stage 1.

### 2. Implement data manipulation functions

- Asked: Implement JavaScript functions for listing, counting, searching, adding, modifying and deleting cinema tickets.
- Got: Functions using `map`, `filter`, `find` and `reduce`, together with validation for new tickets.
- Changed or rejected: The generated functions were kept and adapted to the CinemaTicket data model.

### 3. Test the JavaScript logic

- Asked: Test the JavaScript functions without using the DOM and display the results in the browser console.
- Got: Console tests for reading data, adding a ticket, checking immutability, changing a ticket state, deleting a ticket and validating incorrect input.
- Changed or rejected: The tests were kept in the JavaScript file and verified using the browser console.

## What I learned / what did not work

I learned how to store application data in a JavaScript array and how to manipulate that data using array methods.

I learned how `map`, `filter`, `find` and `reduce` can be used for different data operations.

I learned how to keep operations immutable by returning new arrays instead of modifying the original array.

I also learned how to test JavaScript functions directly in the browser console without using the DOM.

At first, the `cinema.js` file could not be loaded because it was placed inside the `ai-log` folder. The browser returned a 404 error. I moved `cinema.js` to the main CinemaTicket project folder, after which the script loaded correctly.

The final JavaScript functionality was verified successfully in the browser console.