


import './App.css'
import ReactMarkdown from "react-markdown";
import { useState } from 'react';

    const defaultMarkdown = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy <strike>crossing stuff out</strike>.
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

`;




function App() {

      const [textData, setTextData] = useState(defaultMarkdown);
  
  
      const upDateText= (evt) => {
      
          setTextData(evt.target.value)}
      
    return (
        <div>
            <h1>Markdown Previewer</h1>
            <p id="labelEditor">Editor</p>
            <div className="boxes-container">
            
            <textarea 
            name="editor"
            id="editor"
            value={textData}
            onChange={upDateText}
           
           
            ></textarea>
            </div>
            
            <p id="labelPreview">Preview</p>
            <div id="preview">
            
              <ReactMarkdown>{textData}</ReactMarkdown>
              </div>
        </div>
    )
}


  


export default App
