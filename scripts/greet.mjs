#!/usr/bin/env node

// Importing modules
import { argv } from 'process';

// Function to generate greeting message
const generateGreeting = (name = 'World') => {
    return `Hello, ${name}!`;
};

// Main function
const main = () => {
    // Get command line arguments
    const args = argv.slice(2);

    // Extract name from arguments, defaulting to 'World' if not provided
    const name = args[0] || 'World';

    // Generate greeting message
    const greeting = generateGreeting(name);

    // Output greeting
    console.log(greeting);
};

// Run the main function
main();
