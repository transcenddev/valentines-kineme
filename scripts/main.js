
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

function changeImage() {
  var yesButton = document.querySelector('.button__yes');
  yesButton.src = './assets/yes-check.png'; // Change the source of the image
  // Change window location to the desired HTML page
  setTimeout(function() {
        alert('Panalo na naman sha');
        // Change window location to the desired HTML page
        window.location.href = 'flowers.html';
      }, 1000); // 3000 milliseconds = 3 seconds
}

// Add event listener to the "No" button image
document.getElementById('noButton').addEventListener('click', function() {
  alert('Bawal Tumanggi!'); // Show an alert message
});

