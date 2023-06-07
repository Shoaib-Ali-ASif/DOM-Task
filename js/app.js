// app.js

// Get references to the light bulb image and the button
const lightBulb = document.getElementById('lighbulb');
const button = document.getElementById('btn');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Check the current source of the light bulb image
  if (lightBulb.src.endsWith('bulboff.gif')) {
    // If the image source ends with 'bulboff.gif', change it to 'bulbon.gif'
    lightBulb.src = './pic_bulbon.gif';
  } else {
    // Otherwise, change it back to 'bulboff.gif'
    lightBulb.src = './pic_bulboff.gif';
  }
});
