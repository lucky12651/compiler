const buttons = document.querySelectorAll('.rectangle-1, .rectangle-13, .rectangle-14');
const codeTextarea = document.getElementById('codeTextarea');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => {
      btn.style.borderColor = '';
    });

    button.style.borderColor = 'blue';

    const language = button.querySelector('i').classList[1];

    switch (language) {
      case 'fa-python':
        codeTextarea.placeholder = 'Python code to say hello world...';
        break;
      case 'fa-java':
        codeTextarea.placeholder = 'Java code to say hello world...';
        break;
      case 'fa-js':
        codeTextarea.placeholder = 'JavaScript code to say hello world...';
        break;
      case 'fa-cuttlefish':
        codeTextarea.placeholder = 'C code to say hello world...';
        break;
      case 'fa-html5':
        codeTextarea.placeholder = 'HTML code to say hello world...';
        break;
      default:
        codeTextarea.placeholder = 'Enter your code here...';
        break;
    }
  });
});