// Array of background colors
const colors = [
    '#FF5733', // Red
    '#33FF57', // Green
    '#3357FF', // Blue
    '#FF33A1', // Pink
    '#FF8C00', // Orange
    '#8A2BE2', // Purple
    '#FFC0CB', // Light Pink
    '#20B2AA'  // Light Sea Green
  ];
  
  // Select the button and the body element
  const button = document.getElementById('colorBtn');
  const body = document.body;
  
  // Function to change background color
  function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
  }
  
  // Add event listener to the button
  button.addEventListener('click', changeBackgroundColor);
  