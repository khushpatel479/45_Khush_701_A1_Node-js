import fetch from 'node-fetch';

async function fetchGoogleHomePage() {
  try {
    const response = await fetch('https://www.google.com');
    const data = await response.text(); 
    console.log(data);
  } catch (error) {
    console.error('Error fetching Google page:', error);
  }
}

fetchGoogleHomePage();
