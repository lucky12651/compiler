function clearTextarea(element) {
    if (element.value === "Got any command line arguments ? Type here !") {
        element.value = "";
    }
}

function restoreTextarea(element) {
    if (element.value === "") {
        element.value = "Got any command line arguments ? Type here !";
    }
}