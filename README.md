# 8BIT Online Code Editor

This repository contains the code for an online code editor called 8BIT. The editor allows users to write, edit, and run code snippets in various programming languages directly in the browser. It is built using HTML, CSS, and JavaScript, and it utilizes the Ace code editor library for providing a code editing environment.

## Features

- Syntax highlighting and code autocompletion for Python, Java, C++, and C.
- Video background on the landing page.
- Copy code to clipboard.
- Save code to the editor.
- Clear the editor.
- Execute code and view the output.
- Upload files from the local folder.
- Switch between light and dark themes.

## Dependencies

The editor uses the following external libraries and APIs:

- [Ace Code Editor](https://ace.c9.io/): Provides the code editing functionality with syntax highlighting and autocompletion.
- [Font Awesome](https://fontawesome.com/): Provides icons used in the editor UI.
- [SweetAlert2](https://sweetalert2.github.io/): Used for showing alerts and messages.
- [Bootstrap](https://getbootstrap.com/): Used for styling the UI components.
- [Firebase](https://firebase.google.com/): Used for user authentication (login) and data storage.
- [Rapid API](https://rapidapi.com/): (Used for Compiler output)

## Usage

1. Clone the repository: `git clone https://github.com/lucky12651/compiler`
2. Open the `index.html` file in your browser to access the online code editor.
3. Write or paste your code in the editor area.
4. Use the buttons in the UI to perform various actions such as copying code, saving code, executing code, and more.
5. The editor supports Python, Java, C++, and C programming languages.

## Firebase API Configuration

The Firebase API is used for user authentication and data storage. Before running the application, make sure to replace the `firebaseConfig` object in the `firebase.js` file with your own Firebase project configuration. Visit the [Firebase Console](https://console.firebase.google.com/) to set up a new project and obtain your configuration object.

```javascript
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
```


## Rapid API Integration

To integrate Rapid API into your project, follow these steps:

1. Sign up for a Rapid API account at [https://rapidapi.com](https://rapidapi.com).

2. Obtain your API key from Rapid API.

3. Clone the repository:

   ```bash
   git clone https://github.com/lucky12651/compiler


## Credits

The code for this online code editor is created and maintained by Vaibhav Srivastava(https://lucky12651.github.io/compiler/).

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to contribute to this project by submitting issues or pull requests.

If you have any questions or need further assistance, please feel free to contact me at team@webwisemedia.in.

Happy coding!
