const button = document.getElementById('myButton');
  const div = document.getElementById('myDiv');

  // define the function to change the HTML content
  function changeContent() {
    div.innerHTML = '<p>New HTML content!</p>';
  }

  // add event listener to the button
  button.addEventListener('click', changeContent);