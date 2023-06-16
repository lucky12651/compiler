function changePlaceholder(element, language) {
    if (language === 'python') {
        element.placeholder = '#Python program to say hello world \n print("Hello, World!")';

    } else if (language === 'java') {
        element.placeholder = '#Java program to show hello world \n public class Main {\n  public static void main(String[] args) {\n   System.out.println("Hello World");\n }\n}';
    } else if (language === 'c') {
        element.placeholder = 'c kon padta h bro...';
    } else if (language === 'cuttlefish') {
        element.placeholder = 'C++ program to show hello world';
    } else if (language === 'javascript') {
        element.placeholder = 'JavaScript code to show hello world';
    } else {

        element.placeholder = 'Lets Start ...';
    }
}