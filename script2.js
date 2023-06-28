function openChatWindow() {
  var chatWindow = window.open("https://chat.openai.com/", "_blank", "width=400,height=600");
  if (chatWindow) {
    console.log("Chat Gpt opened");
  } else {
    console.log("Failed to open Chat Gpt");
    Swal.fire({
      icon: 'warning',
      title: 'Attention',
      text: 'Failed to open Chat GPT.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  }
}
// Check if the viewCount key exists in localStorage
if (!localStorage.getItem('viewCount')) {
  // If not, create the viewCount key and set its initial value to 0
  localStorage.setItem('viewCount', '0');
}

// Retrieve the current view count from localStorage
var count = parseInt(localStorage.getItem('viewCount'));

// Increment the view count by 1
count++;

// Store the updated view count in localStorage
localStorage.setItem('viewCount', count.toString());

console.log('ignore: ', count);

// Event listener for keydown
window.addEventListener('keydown', function(event) {
  // Check if Shift and F5 keys are pressed simultaneously
  if (event.shiftKey && event.keyCode === 116) {
    // Show view count in a sweet alert message
    Swal.fire({
      title: 'View Count',
      text: 'The current view count is: ' + count,
      icon: 'info'
    });
  }
});


function showMessageBox() {
          document.getElementById('overlay').style.display = 'flex';
        }
        
function hideMessageBox() {
          document.getElementById('overlay').style.display = 'none';
        }
function leader() {
          Swal.fire({
    icon: 'info',
    title: 'Be Patient',
    text: 'This Feature is Coming Soon....',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK',
  });
      }
