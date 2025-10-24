// Get references to the HTML elements
const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');

// Set some default markdown text to guide the user
const defaultMarkdown = `
# Welcome to My Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return "Hello World!";
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
`;

// Set the initial value of the textarea
markdownInput.value = defaultMarkdown;

// Function to convert markdown to HTML and update the preview
function updatePreview() {
    // Get the markdown text from the textarea
    const markdownText = markdownInput.value;
    
    // Convert the markdown text to HTML using the marked library
    // The library creates a global 'marked' object we can use
    const htmlText = marked.parse(markdownText);
    
    // Set the innerHTML of the output element to the converted text
    htmlOutput.innerHTML = htmlText;
}

// Add an event listener to the textarea that calls updatePreview on every input
markdownInput.addEventListener('input', updatePreview);

// Call the function once on page load to render the initial default text
updatePreview();
