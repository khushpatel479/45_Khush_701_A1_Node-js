// If using Node.js v18+, you can skip this import
import fetch from 'node-fetch'; // or: const fetch = require('node-fetch'); for CommonJS

async function fetchGoogleHomePage() {
  try {
    const response = await fetch('https://www.google.com');
    const data = await response.text(); // use .text() instead of .json() for HTML pages
    console.log(data);
  } catch (error) {
    console.error('Error fetching Google page:', error);
  }
}

fetchGoogleHomePage();
