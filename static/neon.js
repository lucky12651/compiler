 // Initialize the Ace editor
 const editor = ace.edit("editor");
 editor.setTheme("ace/theme/monokai");
 editor.session.setMode("ace/mode/javascript");

 // Set default content
 const codeContent = `// Type some code ->

console.log("o008 i11l1 g9qCGQ ~-+=");
// à é ù î ø ç Â Ê Æ œ

function updateGutters(cm) {
var gutters = cm.display.gutters,
 __specs = cm.options.gutters;

removeChildren(gutters);

for (var i = 0; i < __specs.length; ++i) {
 var gutterClass = __specs[i];
 var gElt = gutters.appendChild(
     elt(
         "div",
         null,
     )
 );
}
}`;

 editor.setValue(codeContent, -1);
 editor.clearSelection();

 // Editor settings
 editor.setOptions({
     fontSize: "14px",
     showLineNumbers: true,
     tabSize: 2,
     useSoftTabs: true,
     wrap: true, // Enable line wrapping
     enableBasicAutocompletion: true,
     enableSnippets: true,
     enableLiveAutocompletion: true,
 });

 